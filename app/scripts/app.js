'use strict';

/**
 * @ngdoc overview
 * @name forecastApp
 * @description
 * # forecastApp
 *
 * Main module of the application.
 */
angular
    .module('forecastApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/weather/:location', {
                templateUrl: 'views/forecast.html',
                controller: 'ForecastCtrl'
            })
            .when('/weather/:location/today', {
                templateUrl: 'views/today.html',
                controller: 'TodayCtrl'
            })
            .when('/weather/:location/:weekday', {
                templateUrl: 'views/weekday.html',
                controller: 'WeekdayCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });