"use strict";

var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');
 
var port = process.env.PORT || 3000;
var serve = serveStatic('web', { 'fallthrough': false });
var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});


server.on('listening', function() {
  console.log('Server listening on port: ' + port);
});
server.listen(port);
