var express = require("express");
const sql = require("mssql");
const mysql = require("mysql2");
const bodyParser = require("body-parser");



// DB
// CONFIGURA OQ ENTRA NO BANCO
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lingualoca#4',
    database: 'caioField'
  });
  
  // CONECTA NO MEU BANCO DE DADOS 
  db.connect((err) => {
    if (err) {
      console.error('ERRO BD:', err);
    } else {
      console.log('FUNCIONOU!');
    }
  });


// APP
const app = express();
app.use(express.json());
app.use("/",express.static("public"));
app.use(bodyParser.json());


app.post("/cadastrar", (req,res)=>{
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var team = req.body.teamServer;
    var senha = req.body.senhaServer;
    var sqlString = `INSERT INTO usuario (nome, email, team, senha) VALUES ('${nome}', '${email}', '${team}', '${senha}')`;
    db.query(sqlString, (err, results) => {
        if (err) {
          console.error('Erro:', err);
          res.status(500).json({ error: 'erro 500' });
        } else {
          res.json(results);
        }
      });
})

app.post("/autenticar", (req,res)=>{
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var sqlString = `SELECT email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}'`;
    db.query(sqlString, (err, results) => {
        if(err) {
            console.error('Erro:', err);
            res.status(500).json({error: 'erro 500'});
        } else {
            res.json(results);
        }
    });

})

// server
const port = 8080;

app.listen(port,()=>{
    console.log("http://localhost:8080");
})