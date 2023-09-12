const express = require("express");

const PORT = 8080;
const app = express();
app.get("/hello", (req, res) => {
  res.send("<h1>Hello user</h1>");
});
app.listen(PORT, () => {
  console.log("Hello service on port ", PORT);
});
