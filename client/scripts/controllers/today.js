'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('TodayCtrl', function($scope, $routeParams, WeatherAPI, dateFactory, GeocodingAPI) {

		GeocodingAPI.get($routeParams.location).then( function(addressData){
			var location = addressData.data.results[0].geometry.location;
			return WeatherAPI.get(location.lat + ',' + location.lng);
		}).then(formatWeather).catch(function(err){
			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';
		});

		function formatWeather(weatherData){
			$scope.timezone = weatherData.data.timezone;
        	$scope.hourly = cut(weatherData.data.hourly.data, 8);
        	$scope.time = time(weatherData.data.hourly.data);
        	$scope.dailySummary = weatherData.data.hourly.summary;
        	$scope.date = dateFactory.formatDate(weatherData.data.currently.time);
		}

		function time(data){
	        return data.map(function(i){
        		return dateFactory.getHour(dateFactory.getDate(i.time))
        	}, []);
		}

		function cut(arr, num){
			return arr.slice(0, num);
		}

	});
