// -- Modularizing App Routes
// * npm install express --save
// * npm install router --save

const express = require("express");
const routes = require("./routes/routes.js");
const door = process.env.PORT || 3000;

const app = express();

app.use("/", routes);

app.get("*", (req, res) => {
  res.send("Pinchers Course");
});

app.listen(door, () => {
  console.log("server running...");
});
