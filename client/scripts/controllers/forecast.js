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
        	$scope.timezone = weatherData.timezone;
        	$scope.daily = cut(weatherData.daily.data, 5);
        	$scope.days = cut(addDays(weatherData.daily.data), 5);
		}

		function addDays(data){
        	return data.map(function(i){
        		return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time)));
        	}, []);
		}

		function cut(arr, num){
			return arr.slice(0, num);
		}

	    $scope.weather();
	});
