'use strict';

angular.module('forecastApp')
	.factory('weatherFactory', function($http) {
	    return {
	        getWeather: function(location){
	        	return $http.jsonp('https://api.forecast.io/forecast/892e00e8eed58f98e6293e199512daee/' + location + '?callback=JSON_CALLBACK');
	        }
	    };
	});