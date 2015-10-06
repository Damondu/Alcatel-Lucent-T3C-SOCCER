var mysql 		= require('mysql');
var mysql_info  = require('./config').mysql;

var connection	= mysql.createConnection(mysql_info);


connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
	}

	console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;