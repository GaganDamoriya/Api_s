import express from "express";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/protected-route", authenticateToken, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

export default router;
