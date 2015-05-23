'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('TodayCtrl', function($scope, $routeParams, weatherFactory, dateFactory) {

		$scope.timezone = '';
    	$scope.hourly = [];
    	$scope.time = [];
    	$scope.dailySummary = '';
    	$scope.date = '';

	    var init = function() {
	        weatherFactory.getWeather($routeParams.location).success(function(data) {

	        	var timeArr = [];
	        	data.hourly.data.forEach(function(i){
	        		timeArr.push(dateFactory.getHour(dateFactory.getDate(i.time)));
	        	});

	        	$scope.timezone = data.timezone;
	        	$scope.hourly = data.hourly.data;
	        	$scope.time = timeArr;
	        	$scope.dailySummary = data.hourly.summary;
	        	$scope.date = dateFactory.formatDate(data.currently.time);

	         });
	    };

	    init();
	});
