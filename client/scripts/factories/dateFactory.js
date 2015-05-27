'use strict';

angular.module('forecastApp')
	.factory('dateFactory', function() {
	    return {
	        formatDate: function(unixTimestamp){
	        	// unixTimestamp: 1432729607

			    var fulldate = this.getDate(unixTimestamp);
			    var day = this.getDayName(fulldate.getDay());
			    var date = fulldate.getDate();
			    var month = this.getMonth(fulldate.getMonth());
			    var year = fulldate.getFullYear();

	        	return day + ' ' + date + ' ' + month + ' ' + year;

	        	// return: 'Monday 1 June 2015'
	        },


	        getHour: function(data){
	        	// data: 'Wed May 27 2015 22:00:00 GMT+1000 (AEST)'

	        	var hour = data.getHours().toString();
	        	if (hour.length === 1) { hour = '0' + hour; }
	        	return hour;

	        	// return: 22
	        },


	        getDay: function(data){
	        	// data: Wed May 27 2015 06:00:00 GMT+1000 (AEST)
	        	
	        	return data.getDay();

	        	// return: 3
	        },


	        getDayName: function(dayIndex){
	        	// data: 3
	        	
	        	var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			    return daysOfWeek[dayIndex];

			    // 'Wednesday'
	        },


	        getDate: function(unixTimestamp){
	        	// unixTimestamp: 1432670400
	        	
	        	return new Date(unixTimestamp * 1000);

	        	// return: 'Wed May 27 2015 06:00:00 GMT+1000 (AEST)'
	        },


	       	getMonth: function(monthIndex){
	       		// monthIndex: 5

	        	var monthNames = [
			        'January', 'February', 'March',
			        'April', 'May', 'June', 'July',
			        'August', 'September', 'October',
			        'November', 'December'
			    ];

			    return monthNames[monthIndex];

			    // return: 'June'
	        },

	        
	    };
	});