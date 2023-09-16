import express from "express";
import User from "../models/user.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(200).send("Successfully Registered");
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: user._id }, secret_key, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
