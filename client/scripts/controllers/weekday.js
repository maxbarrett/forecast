'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:WeekdayCtrl
 * @description
 * # WeekdayCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('WeekdayCtrl', function($scope, $routeParams, WeatherAPI, dateFactory) {

		$scope.weather = function() {
			$scope.weatherForecast = WeatherAPI.get($routeParams.location).success(formatWeather);
		}

		function formatWeather(weatherData){
	   			// add vars to scope for use in view
	        	$scope.timezone = weatherData.timezone;
	        	$scope.weekdayData = getFirstDay(weatherData.daily.data)[0]; // get first day
	        	$scope.date = dateFactory.formatDate(getFirstDay(weatherData.daily.data)[0].time);
		}

		function getFirstDay(data){
			// Find the correct day data
			return data.filter(function (day) {
				return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(day.time))).toLowerCase() === $routeParams.weekday.toLowerCase(); 
			});
		}

		$scope.weather();

	});
