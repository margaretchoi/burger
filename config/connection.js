var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '&&iH6I>(ashT',
  database : 'burgers_db'
});
 


if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection= mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'hacktheplanet',
	  database : 'todoagain_db'
	});
};

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('MySQL Connected');
});
 
module.exports = connection;