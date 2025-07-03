const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home-page.html');
});

app.get("/our-school", (req, res) => {
  res.sendFile(__dirname + '/our-school.html');
});

app.get("/athletics", (req, res) => {
  res.sendFile(__dirname + '/athletics.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
