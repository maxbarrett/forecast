'use strict';

// Set port & environment variables
var port = process.env.PORT || 8000;
var env = process.env.NODE_ENV || 'development';

// Create an express instance
var express = require('express');
var app = express();
var server = require('http').createServer(app);

require('./config')(app);
require('./routes')(app);

// Start the server
server.listen(port, function () {
  console.log('Express server listening on port ' + port + ', in ' + env + ' mode.');
});

// Expose app
exports = module.exports = app;
