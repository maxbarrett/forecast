'use strict';

angular.module('forecastApp')
	.factory('dateFactory', function() {
	    return {
	        formatDate: function(unixTimestamp){

			    var fulldate = this.getDate(unixTimestamp);

			    var day = this.getDayName(fulldate.getDay());
			    var date = fulldate.getDate();
			    var month = this.getMonth(fulldate.getMonth());
			    var year = fulldate.getFullYear();

	        	return day + ' ' + date + ' ' + month + ' ' + year;
	        },

	        getHour: function(data){
	        	var hour = data.getHours().toString();
	        	if (hour.length === 1) { hour = '0' + hour; }
	        	return hour;
	        },

	        getDay: function(data){
	        	return data.getDay();
	        },

	        getDayName: function(dayIndex){
	        	var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			    return daysOfWeek[dayIndex];
	        },

	        getDate: function(unixTimestamp){
	        	return new Date(unixTimestamp * 1000);
	        },

	       	getMonth: function(monthIndex){
	        	var monthNames = [
			        'January', 'February', 'March',
			        'April', 'May', 'June', 'July',
			        'August', 'September', 'October',
			        'November', 'December'
			    ];

			    return monthNames[monthIndex];
	        },

	        
	    };
	});