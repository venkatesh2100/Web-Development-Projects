const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const User = require('../db');

// Create an instance of the router
const router = express.Router();

// Zod validation schema for signup
const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

// POST for user signup
router.post('/signup', async (req, res) => {
  const { success, error } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      errors: error.errors,
    });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(400).json({
      message: "Email is already taken",
    });
  }

  // Create the user
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(201).json({
    message: "User account created successfully!",
    token,
  });
});

// Zod validation schema for signin
const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

// POST for user signin
router.post('/signin', async (req, res) => {
  const { success, error } = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      errors: error.errors,
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(200).json({
    token,
    message: "Successfully logged in",
  });
});

// Zod validation schema for update
const updateSchema = zod.object({
  username: zod.string().optional(),
  password: zod.string().optional(),
  lastname: zod.string().optional(),
  firstname: zod.string().optional(),
});

// PUT to update user details
router.put('/update', async (req, res) => {
  const { success, error } = updateSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Error while updating",
      errors: error.errors,
    });
  }

  try {
    await User.findByIdAndUpdate(req.userId, req.body, { new: true });
    return res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while updating",
      error: error.message,
    });
  }
});

// GET to fetch users with pagination and filtering
router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || "";
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  try {
    const users = await User.find({
      $or: [
        {
          firstname: { $regex: new RegExp(filter, 'i') },
        },
        {
          lastname: { $regex: new RegExp(filter, 'i') },
        },
      ],
    })
    .skip((page - 1) * limit)
    .limit(limit);

    res.json({
      users: users.map(user => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        userId: user._id,
      })),
      pagination: {
        page,
        limit,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while reading",
      error: error.message,
    });
  }
});

module.exports = router;
