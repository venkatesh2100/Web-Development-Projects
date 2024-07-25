import express from "express";
import userRouter from"./user";
const app = express.Router();

app.use("/user",userRouter);

module.exports = router;



