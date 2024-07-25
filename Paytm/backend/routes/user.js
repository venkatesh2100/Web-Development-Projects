import { express } from "express";
const User=require("../db")
const app = express.Router();
const zod = require("zod");
const singinSchema = zod.object({
  username: zod.string().email,
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

app.post("/singup", async(req, res) => {
  const body = req.body;

const success = singinSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Email is already Taken /Incorrect Inputs",
    });
  }

  const existingUser=await User.findone({
    username:req.body.username
  })
  if(existingUser){
    return res.status(411).json({
      message:"Email is already taken "
    })

  }

  const user=await User.create({
    username:req.body.username,
    password:req.body.password,
    firstname:req.body.firstname,
    lastname:req.body.lastname
  }
  )

  const userId=user._id;
  const token=jwt.singin({
    userId:user._id,
    token:token
  },JWT_TOKEN)
res.status(400).json({
  message:"user Account is created OK!"
})
});



exports.module = router;
