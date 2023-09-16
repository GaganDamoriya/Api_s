const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/coin", (req, res) => {
  res.status(200).send({
    coin: "5 rupee",
    currency: "Rupee",
  });
});
app.post("/coin/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send("we need a logo");
  }

  res.status(201).send(`the given logo is ${logo} and given id: ${id}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
