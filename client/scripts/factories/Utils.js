'use strict';

angular.module('forecastApp')
	.factory('Utils', function(dateFactory) {
	    return {

	        nameDays: function(data){
	        	// data: daily weather object from forecast.io

		        return data.map(function(i){
	        		return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time)));
	        	}, []);

	        	// return: days of the week
	        },


	        time: function(data){
	        	// data: hourly weather object from forecast.io

		        return data.map(function(i){
	        		return dateFactory.getHour(dateFactory.getDate(i.time))
	        	}, []);

	        	// return: array of numerical hours
			},


			pickDay: function(data, urlDay){
				// data: daily weather object from forecast.io
				// urlDay: 'weekday'

				return data.filter(function (day) {
					return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(day.time))).toLowerCase() === urlDay; 
				})[0];

				// return: weather data object for weekday
			},


			getLatLong: function(addressData){
				// data: response object from google maps api

				if (addressData.results[0] === undefined) { return; }
				var location = addressData.results[0].geometry.location; // a recursive object key search would be ideal here...
				return location.lat + ',' + location.lng;

				// return: lat long coordinates
			}

	    };
	});