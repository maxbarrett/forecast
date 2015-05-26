'use strict';

angular.module('forecastApp')
	.factory('Utils', function(dateFactory, $routeParams) {
	    return {

	        slice: function(arr, num){
	    		return arr.slice(0, num);
	        },

	        addDays: function(data){
		        return data.map(function(i){
	        		return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(i.time)));
	        	}, []);
	        },

	        time: function(data){
		        return data.map(function(i){
	        		return dateFactory.getHour(dateFactory.getDate(i.time))
	        	}, []);
			},

			getFirstDay: function(data){
				// Find the correct day data
				return data.filter(function (day) {
					return dateFactory.getDayName(dateFactory.getDay(dateFactory.getDate(day.time))).toLowerCase() === $routeParams.weekday.toLowerCase(); 
				});
			}

	    };
	});