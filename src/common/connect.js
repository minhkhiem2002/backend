var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'zens'
})

connection.connect(function(err, connection) {
    if (err) {
        console.error("Kết nối không thành công:", err);
        return;
    }
    console.log("Kết nối thành công!");
});

module.exports = connection;