import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
dotenv.config();

const uri = process.env.MONGO_URI;
const app = express();
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
