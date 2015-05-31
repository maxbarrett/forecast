'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
	.controller('ForecastCtrl', function($scope, $routeParams, $location, WeatherAPI, GeocodingAPI, Utils) {

		$scope.weather = {};

		// show the loading spinner
		$scope.resourceLoaded = false;
		$scope.spinner = true;

		// pass location in url to google geocoding api
		GeocodingAPI.get($routeParams.location).then( function(addressData){

			$scope.weather.locale = Utils.getLocale(addressData);

			// format google's response into a string
			return Utils.getLatLong(addressData);

		}).then( function(latLong){

			// pass that formatted string to the forecast.io endpoint
			return WeatherAPI.get(latLong);

		}).then( function(data){

			// pass the data on the the view
			return setScopeVars(data);

		}).catch( function(err){

			// if there's any errors in the above sequence, let the user know
			$scope.oops = 'I\'m so sorry, there\'s been a terrible mistake';
			$scope.spinner = false;
			$scope.resourceLoaded = false;
		});

		// set template vars
		function setScopeVars(weatherData){
			// hide the loading spinner
			$scope.resourceLoaded = true;
			$scope.spinner = false;
			$scope.location = $location.path();

			// display formatted day names 
        	$scope.weather.dayName = Utils.nameDays(weatherData.daily.data.slice(0, 5));

        	// show data for next 5 days
        	$scope.weather.data = Utils.chooseWeatherStats(weatherData.daily.data.slice(0, 5)); 
        	
		}

	});
