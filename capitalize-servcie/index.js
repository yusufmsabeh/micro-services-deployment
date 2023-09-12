const express = require("express");

const PORT = 8080;
const app = express();
app.get("/capitalize", (req, res) => {
  const word = req.query.word ?? "none";
  res.send(`<h1>${word.toUpperCase()}</h1>`);
});
app.listen(PORT, () => {
  console.log("Capitalize service on port ", PORT);
});
