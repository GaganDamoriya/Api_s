import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 8080;
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("holaaa");
  res.status(200).send("This is Landing page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
