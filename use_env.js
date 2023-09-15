let express = require("express");
let app = express();

const homepage = __dirname + "/views/index.html";
const publicPath = __dirname + "/public";

app.use("/public", express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(homepage);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({ message: "HELLO JSON" });

  else res.json({ message: "Hello json" });
});

module.exports = app;
