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

		$scope.resourceLoaded = false;

		GeocodingAPI.get($routeParams.location).then( function(addressData){

			return Utils.getLatLong(addressData);

		}).then( function(latLong){

			return WeatherAPI.get(latLong);

		}).then( function(data){

			return setScopeVars(data);

		}).catch( function(err){

			$scope.oops = 'I\'m so sorry, there\'s been a terrible mistake';

		});

		function setScopeVars(weatherData){
			$scope.resourceLoaded = true;
			
			$scope.timezone = weatherData.timezone; // location string
        	$scope.hourly = weatherData.hourly.data.slice(0, 8); // data for next 8 hours
        	$scope.time = Utils.time(weatherData.hourly.data); // show hours from unix timestamp
        	$scope.dailySummary = weatherData.hourly.summary; // forecast summary as a string
        	$scope.date = DateFactory.formatDate(weatherData.currently.time); // today's formatted date
		}

	});
