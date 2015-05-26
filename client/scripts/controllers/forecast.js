'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('ForecastCtrl', function($scope, $routeParams, WeatherAPI, dateFactory, GeocodingAPI) {

		GeocodingAPI.get($routeParams.location).then( function(addressData){
			var location = addressData.data.results[0].geometry.location;
			return WeatherAPI.get(location.lat + ',' + location.lng);
		}).then(formatWeather).catch(function(err){
			$scope.timezone = 'I\'m so sorry, there\'s been a terrible mistake';
		});

		function formatWeather(weatherData){
        	$scope.timezone = weatherData.data.timezone;
        	$scope.daily = cut(weatherData.data.daily.data, 5);
        	$scope.days = cut(addDays(weatherData.data.daily.data), 5);
		}

		function addDays(data){
        	return data.map(function(i){
        		return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time)));
        	}, []);
		}

		function cut(arr, num){
			return arr.slice(0, num);
		}

	});
