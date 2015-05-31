'use strict';

angular.module('forecastApp')
	.factory('Utils', function(DateFactory) {
	    return {

	        nameDays: function(data){
	        	// data: daily weather object from forecast.io

		        return data.map(function(i){
	        		return DateFactory.getDayName(DateFactory.getDay(DateFactory.getDate(i.time)));
	        	}, []);

	        	// return: days of the week
	        },


	        time: function(data){
	        	// data: hourly weather object from forecast.io

		        return data.map(function(i){
	        		return DateFactory.getHour(DateFactory.getDate(i.time))
	        	}, []);

	        	// return: array of numerical hours
			},


			pickDay: function(data, urlDay){
				// data: daily weather object from forecast.io
				// urlDay: 'weekday'

				return data.filter(function (day) {
					return DateFactory.getDayName(DateFactory.getDay(DateFactory.getDate(day.time))).toLowerCase() === urlDay; 
				})[0];

				// return: weather data object for weekday
			},


			getLatLong: function(addressData){
				// data: response object from google maps api

				if (addressData.results[0] === undefined) { return; }
				var location = addressData.results[0].geometry.location; // a recursive object key search would be ideal here...
				return location.lat + ',' + location.lng;

				// return: lat long coordinates
			},


			getLocale: function(data){
				// data: response object from google maps api

				if (data.results[0]) {
					return data.results[0].address_components[0].long_name;
				} else {
					return 'Unknown';
				}

				// return: Location string
			},


			// depending on whether data is for one time or several
			chooseWeatherStats: function(weatherData){
				if (this.isArray(weatherData)){
					return this.getRepeatStats(weatherData);
				} else {
					return this.getStats(weatherData);
				}
			},


			// check
			isArray: function(arr){
				return Object.prototype.toString.call(arr) === '[object Array]';
			},


			// only grab necessary data for the view template
			getStats: function(weatherData){
				var self = this;
				var stats = {};

				stats.summary = weatherData.summary;
				stats.temperatureMax = self.convertFarenheitCelcius(weatherData.temperatureMax);
				stats.temperatureMin = self.convertFarenheitCelcius(weatherData.temperatureMin);
				stats.precipProbability = self.convertDecimalPercentage(weatherData.precipProbability);
				stats.windSpeed = Math.round(weatherData.windSpeed);

				return stats;
			},


			// as above but for repeated data
			getRepeatStats: function(weatherData){
				var self = this;
				var stats = [];

				weatherData.map(function(current, index, arr){
					var dayObj = {}

					dayObj.summary = current.summary;
					dayObj.precipProbability = self.convertDecimalPercentage(current.precipProbability);
					dayObj.windSpeed = Math.round(current.windSpeed);

					// hourly data doesn't have min/max temps
					if (current.temperature){
						dayObj.temperature = self.convertFarenheitCelcius(current.temperature);
					} else {
						dayObj.temperatureMax = self.convertFarenheitCelcius(current.temperatureMax);
						dayObj.temperatureMin = self.convertFarenheitCelcius(current.temperatureMin);
					}

					stats.push(dayObj);
				});

				return stats;
			},


			// nobody uses farenheit these days
			convertFarenheitCelcius: function(farenheit){
				return Math.round((farenheit - 32) * (5/9));
			},


			// percentages are nicer than decimals
			convertDecimalPercentage: function(decimal){
				return Math.round(decimal * 100);
			}


	    };
	});