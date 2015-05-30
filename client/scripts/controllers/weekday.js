'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:WeekdayCtrl
 * @description
 * # WeekdayCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('WeekdayCtrl', function($scope, $routeParams, WeatherAPI, DateFactory, GeocodingAPI, Utils) {

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
			// cache result as it's used twice 
			var weekdayData = Utils.pickDay(weatherData.daily.data, $routeParams.weekday.toLowerCase());

			$scope.resourceLoaded = true;
			$scope.spinner = false;

        	$scope.weather.data = Utils.chooseWeatherStats(weekdayData); // the data
        	$scope.weather.date = DateFactory.formatDate(weekdayData.time); //  formatted date
		}

	});
