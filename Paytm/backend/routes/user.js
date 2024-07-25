import { Router } from "express";
import { object, string } from "zod";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { findOne, create, findByIdAndUpdate, find } from "../db";
import authMiddleware from "../middleware";
import { Account, User } from "../db";
// Create an instance of the router
const router = Router();

// Zod validation schema for signup
const signupSchema = object({
  username: string().email(),
  password: string(),
  firstname: string(),
  lastname: string(),
});

// POST for user signup
router.post("/signup", async (req, res) => {
  const { success, error } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      errors: error.errors,
    });
  }

  // Check if the user already exists
  const existingUser = await findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(400).json({
      message: "Email is already taken",
    });
  }

  // Create the user
  const user = await create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  const userId = user._id;
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
  // Generate a JWT token
  const token = sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  return res.status(201).json({
    message: "User account created successfully!",
    token,
  });
});

// Zod validation schema for signin
const signinSchema = object({
  username: string().email(),
  password: string(),
});

// POST for user signin
router.post("/signin", async (req, res) => {
  const { success, error } = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      errors: error.errors,
    });
  }

  const user = await findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const token = sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  return res.status(200).json({
    token,
    message: "Successfully logged in",
  });
});

// Zod validation schema for update
const updateSchema = object({
  username: string().optional(),
  password: string().optional(),
  lastname: string().optional(),
  firstname: string().optional(),
});

// PUT to update user details
router.put("/", authMiddleware, async (req, res) => {
  const { success, error } = updateSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Error while updating",
      errors: error.errors,
    });
  }

  try {
    await findByIdAndUpdate(req.userId, req.body, { new: true });
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
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  try {
    const users = await find({
      $or: [
        {
          firstname: { $regex: new RegExp(filter, "i") },
        },
        {
          lastname: { $regex: new RegExp(filter, "i") },
        },
      ],
    })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      users: users.map((user) => ({
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

export default router;
