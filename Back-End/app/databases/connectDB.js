var mysql = require('mysql');

var connection = new mysql.createPool({
    host: '104.248.145.103',
    user: 'ViTK',
    port: '3306',
    password: 'ViTK@123',
    database: 'Do_An_Chuyen_Nganh_A',
    charset: 'utf8_general_ci'
});

connection.getConnection(function (err) {
    if (err) { console.log("Connect Database Fail !!!" + err) }
});

module.exports = connection;