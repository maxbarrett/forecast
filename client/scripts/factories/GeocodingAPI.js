'use strict';

angular.module('forecastApp')
	.factory('GeocodingAPI', function($http) {
	    return {
	        get: function(location){
	        	// get the lat/long coordinates of a location from google api
	        	return $http.get('http://maps.google.com/maps/api/geocode/json?address=' + location + '&sensor=false').then(function(result) {
          			return result.data;
        		});
	        }
	    };
	});