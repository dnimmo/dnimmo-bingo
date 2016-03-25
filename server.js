// ============
// Server stuff
// ============
var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 8080;

// Serve files
app.use(express.static('./'));

server.listen(port, function(){
	console.log("Server listening at port %d", port);
});