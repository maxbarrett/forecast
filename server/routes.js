'use strict';

var errors = require('./errors');

module.exports = function(app) {

	// TODO: FIX ERROR ROUTING...

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
        	res.sendFile('index.html', { root: __dirname + '/../client/' });
        });
};
