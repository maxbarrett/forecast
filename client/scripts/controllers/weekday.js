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

			// cache result as it's used twice 
			var weekdayData = Utils.pickDay(weatherData.daily.data, $routeParams.weekday.toLowerCase());

        	$scope.timezone = weatherData.timezone; //  location
        	$scope.weekdayData = weekdayData; // the data
        	$scope.date = DateFactory.formatDate(weekdayData.time); //  formatted date
		}

	});
