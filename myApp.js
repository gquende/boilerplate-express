let express = require("express");
let app = express();

const homepage = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(homepage);
});

module.exports = app;
