const express = require("express");
const path = require("path");
const app = express();
const mysql = require('mysql');

const db = require('./database/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const config = {
    host: 'db',
    user: 'fullcycle',
    password: 'fullcycle',
    database: 'fullcycle'
};

app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config);
    
    db.query('SELECT * FROM usuarios;', function (err, result, fields) {
        if(err) {
            connection.end();
            return res.send('Falha no banco de dados');
        }

        connection.end();
        return res.render('retorno', { usuarios: result });
    });

});

app.listen(8080);