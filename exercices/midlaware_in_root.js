let express = require("express");
let app = express();

const homepage = __dirname + "/views/index.html";
const publicPath = __dirname + "/public";

//app.use("/public", express.static(publicPath));


app.use((req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  console.log(`${method} ${path} - ${ip}`);
  
  next();
});

// Rota de exemplo
app.get('/json', (req, res) => {
  res.json({ message: 'Exemplo de resposta JSON' });
});


app.get("/", (req, res) => {
  res.sendFile(homepage);
});

module.exports = app;