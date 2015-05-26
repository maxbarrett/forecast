'use strict';

angular.module('forecastApp')
	.factory('ProcessURL', function($http) {
	    return {
	        get: function(location){
	        	return $http.get('http://maps.google.com/maps/api/geocode/json?address=' + location + '&sensor=false');
	        }
	    };
	});