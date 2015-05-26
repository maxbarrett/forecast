'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:WeekdayCtrl
 * @description
 * # WeekdayCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('WeekdayCtrl', function($scope, $routeParams, WeatherAPI, dateFactory, GeocodingAPI) {

		GeocodingAPI.get($routeParams.location).then( function(addressData){
			var location = addressData.data.results[0].geometry.location;
			return WeatherAPI.get(location.lat + ',' + location.lng);
		}).then(formatWeather).catch(function(err){
			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';
		});

		function formatWeather(weatherData){
   			// add vars to scope for use in view
        	$scope.timezone = weatherData.data.timezone;
        	$scope.weekdayData = getFirstDay(weatherData.data.daily.data)[0]; // get first day
        	$scope.date = dateFactory.formatDate(getFirstDay(weatherData.data.daily.data)[0].time);
		}

		function getFirstDay(data){
			// Find the correct day data
			return data.filter(function (day) {
				return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(day.time))).toLowerCase() === $routeParams.weekday.toLowerCase(); 
			});
		}

	});
