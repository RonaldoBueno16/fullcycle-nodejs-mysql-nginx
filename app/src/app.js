const express = require("express");
const path = require("path");
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};


app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config);
    
    connection.query('SELECT * FROM people;', function (err, result, fields) {
        if(err) {
            connection.end();
            return res.send('Falha no banco de dados');
        }

        connection.end();
        return res.render('retorno', { usuarios: result });
    });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/add-user', (req, res) => {
    
    const { nome } = req.body;
    const connection = mysql.createConnection(config);
    
    connection.query('INSERT INTO people (nome) VALUES (?)', [nome], function (err, result) {
        if(err) {
            connection.end();
            return res.send('Erro ao inserir dados no banco');
        }

        connection.end();
        res.redirect('/');
    });
});

app.listen(8080);