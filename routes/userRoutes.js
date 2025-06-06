import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashePassword =await bcrypt.hashpass(pass, 10);
  const result = await userModel.insertOne({
    name: name,
    email: email,
    pass: hashePassword,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email, pass });
  if (!result) return res.json({ message: "Invalid user or password" });
  return res.json(result);
});



export default userRouter;