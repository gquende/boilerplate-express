let express = require("express");
let app = express();

const homepage = __dirname + "/views/index.html";
const publicPath = __dirname + "/public";

app.use("/public", express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(homepage);
});

module.exports = app;
