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

		// show the loading spinner
		$scope.resourceLoaded = false;

		// pass location in url to google geocoding api
		GeocodingAPI.get($routeParams.location).then( function(addressData){

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

		});


		function setScopeVars(weatherData){
			// hide the loading spinner
			$scope.resourceLoaded = true;

			// set template vars
			$scope.location = $location.path();
        	$scope.timezone = weatherData.timezone; // show location string
        	$scope.days = Utils.nameDays(weatherData.daily.data.slice(0, 5)); // display formatted day names 
        	$scope.daily = weatherData.daily.data.slice(0, 5); // show data for next 5 days
        	
		}

	});
