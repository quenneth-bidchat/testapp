const mysql = require('mysql');

const databaseCredentials = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'testdb'
};

const connection = mysql.createConnection(databaseCredentials);

connection.connect((err) => {
    if (err) throw err
    console.log(`Connected to Database ${databaseCredentials.database}`);
});

module.exports = connection;