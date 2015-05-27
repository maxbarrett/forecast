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

			return Utils.getLatLong(addressData);

		}).then( function(latLong){

			return WeatherAPI.get(latLong);

		}).then( function(data){

			return setScopeVars(data.data);

		}).catch( function(err){

			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';

		});

		function setScopeVars(weatherData){
        	$scope.timezone = weatherData.timezone;
        	$scope.daily = weatherData.daily.data.slice(0, 5);
        	$scope.days = Utils.nameDays(weatherData.daily.data.slice(0, 5));
		}

	});
