const express = require("express");

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/posts", (req, res) => {
  res.send("Posts page");
});

app.listen(3000);
