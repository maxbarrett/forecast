'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('ForecastCtrl', function($scope, $routeParams, weatherFactory, dateFactory) {

	    var init = function() {
	        weatherFactory.getWeather($routeParams.location).success(function(data) {

	        	var days = [];
	        	data.daily.data.forEach(function(i){
	        		days.push(dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time))));
	        	});

	        	$scope.timezone = data.timezone;
	        	$scope.daily = data.daily.data;
	        	$scope.days = days;
	         });
	    };

	    init();
	});
