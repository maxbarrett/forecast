'use strict';

angular.module('forecastApp')
	.factory('WeatherAPI', function($http) {
	    return {
	        get: function(location){
	        	// get the weather forecast for the given coordinates
	        	return $http.jsonp('https://api.forecast.io/forecast/892e00e8eed58f98e6293e199512daee/' + location + '?callback=JSON_CALLBACK').then(function(result) {
          			return result.data;
        		});
	        }
	    };
	});