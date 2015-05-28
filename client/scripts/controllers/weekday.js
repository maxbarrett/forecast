'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:WeekdayCtrl
 * @description
 * # WeekdayCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('WeekdayCtrl', function($scope, $routeParams, WeatherAPI, dateFactory, GeocodingAPI, Utils) {

		GeocodingAPI.get($routeParams.location).then( function(addressData){

			return Utils.getLatLong(addressData);

		}).then( function(latLong){

			return WeatherAPI.get(latLong);

		}).then( function(data){

			return setScopeVars(data);

		}).catch( function(err){

			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';

		});

		function setScopeVars(weatherData){
			var weekdayData = Utils.pickDay(weatherData.daily.data, $routeParams.weekday.toLowerCase());
   			// add vars to scope for use in view
        	$scope.timezone = weatherData.timezone;
        	$scope.weekdayData = weekdayData;
        	$scope.date = dateFactory.formatDate(weekdayData.time);
		}

	});
