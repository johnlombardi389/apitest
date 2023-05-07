const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.listen(8080);

// import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// routes
app.get("/", (req, res) => {
  res.send("Home page");
});

// connect to database
mongoose.connect(process.env.DB_CONNECTION);
