'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('TodayCtrl', function($scope, $routeParams, WeatherAPI, DateFactory, GeocodingAPI, Utils) {

		$scope.weather = {};
		$scope.resourceLoaded = false;
		$scope.spinner = true;

		GeocodingAPI.get($routeParams.location).then( function(addressData){
			
			$scope.weather.locale = Utils.getLocale(addressData);
			return Utils.getLatLong(addressData);

		}).then( function(latLong){

			return WeatherAPI.get(latLong);

		}).then( function(data){

			return setScopeVars(data);

		}).catch( function(err){

			$scope.oops = 'I\'m so sorry, there\'s been a terrible mistake';
			$scope.spinner = false;

		});

		function setScopeVars(weatherData){
			$scope.resourceLoaded = true;
			$scope.spinner = false;

			// data for next 8 hours
        	$scope.weather.data = Utils.chooseWeatherStats(weatherData.hourly.data.slice(0, 8));
        	// show hours from unix timestamp
        	$scope.weather.time = Utils.time(weatherData.hourly.data);
        	// forecast summary as a string
        	$scope.weather.dailySummary = weatherData.hourly.summary; 
        	// today's formatted date
        	$scope.weather.date = DateFactory.formatDate(weatherData.currently.time) + ':'; 
		}

	});
