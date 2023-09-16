import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const secret_key = process.env.SECRET_KEY;
  jwt.verify(token, secret_key, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};
