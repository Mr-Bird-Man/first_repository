const express = require("express");
const app = express();
const port = 3000;

app.get("/first_repository/index", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/first_repository/our-school", (req, res) => {
  res.sendFile(__dirname + '/our-school.html');
});

app.get("/first_repository/athletics", (req, res) => {
  res.sendFile(__dirname + '/athletics.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
