'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('ForecastCtrl', function($scope, $routeParams, WeatherAPI, dateFactory, GeocodingAPI, Utils) {

		GeocodingAPI.get($routeParams.location).then( function(addressData){
			var location = addressData.data.results[0].geometry.location;
			return WeatherAPI.get(location.lat + ',' + location.lng);
		}).then(setScopeVars).catch(function(err){
			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';
		});

		function setScopeVars(weatherData){
        	$scope.timezone = weatherData.data.timezone;
        	$scope.daily = Utils.slice(weatherData.data.daily.data, 5);
        	$scope.days = Utils.slice(Utils.addDays(weatherData.data.daily.data), 5);
		}

	});
