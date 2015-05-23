'use strict';

// Require the dependencies
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var path = require('path');

module.exports = function(app) {
	var env = app.get('env');

	// Set html as the templating engine
	app.set('views', '/server/views');
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	// Serve up the static assets
	app.use(favicon(path.join('client', 'favicon.ico')));
	app.use(express.static(path.join('client')));

	if ('development' === env || 'test' === env) {
		// Error handler has to be last
		app.use(errorHandler());
	}
}