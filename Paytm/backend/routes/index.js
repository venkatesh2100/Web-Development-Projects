import express from "express";
import userRouter from "./user";
import accountRouter from "./account";
const app = express.Router();

app.use("/user", userRouter);
app.use("/account", accountRouter);
module.exports = router;
