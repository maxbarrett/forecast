'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('TodayCtrl', function($scope, $routeParams, WeatherAPI, dateFactory) {

		$scope.weather = function() {
			$scope.weatherForecast = WeatherAPI.get($routeParams.location).success(formatWeather);
		}

		function formatWeather(weatherData){
			$scope.timezone = weatherData.timezone;
        	$scope.hourly = cut(weatherData.hourly.data, 8);
        	$scope.time = time(weatherData.hourly.data);
        	$scope.dailySummary = weatherData.hourly.summary;
        	$scope.date = dateFactory.formatDate(weatherData.currently.time);
		}

		function time(data){
	        return data.map(function(i){
        		return dateFactory.getHour(dateFactory.getDate(i.time))
        	}, []);
		}

		function cut(arr, num){
			return arr.slice(0, num);
		}

	    $scope.weather();

	});
