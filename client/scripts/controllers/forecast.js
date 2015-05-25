'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('ForecastCtrl', function($scope, $routeParams, WeatherAPI, dateFactory) {

		$scope.weather = function() {
			$scope.weatherForecast = WeatherAPI.get($routeParams.location).success(formatWeather);
		}

		function formatWeather(weatherData){
			console.log(weatherData)
        	$scope.timezone = weatherData.timezone;
        	$scope.daily = weatherData.daily.data;
        	$scope.days = addDays(weatherData.daily.data);
		}

		function addDays(data){
			var days = [];
			data.forEach(function(i){
        		days.push(dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time))));
        	});
        	return days;
		}

	    $scope.weather();
	});
