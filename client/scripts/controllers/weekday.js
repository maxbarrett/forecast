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

		GeocodingAPI.get($routeParams.location).success(getLatLong);

		function getLatLong(addressData){
			var location = addressData.results[0].geometry.location;
			$scope.weatherForecast = WeatherAPI.get(location.lat + ',' + location.lng).success(formatWeather);
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

	});
