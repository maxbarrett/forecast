'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:WeekdayCtrl
 * @description
 * # WeekdayCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('WeekdayCtrl', function($scope, $routeParams, weatherFactory, dateFactory) {

	    $scope.timezone = '';
	    $scope.weekdayData = {};
	    $scope.date = '';

	    var init = function() {

	        weatherFactory.getWeather($routeParams.location).success(function(data) {

	   			// Find the correct day data
	   			var getDay = data.daily.data.filter(function (day) {
	   				return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(day.time))).toLowerCase() === $routeParams.weekday.toLowerCase(); 
	   			});

	   			// add vars to scope for use in view
	        	$scope.timezone = data.timezone;
	        	$scope.weekdayData = getDay[0]; // get first day
	        	$scope.date = dateFactory.formatDate(getDay[0].time);

	         });
	        
	    };

	    init();
	});
