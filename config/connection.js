let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fetacheese",
    port: 3034,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        throw err;
    };
    console.log("Connection id is " + connection.threadId);
});

module.exports = connection;