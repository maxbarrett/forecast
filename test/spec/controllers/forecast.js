'use strict';

describe('ForecastCtrl', function() {
    var scope,
        GeocodingAPI,
        WeatherAPI,
        httpBackend,
        googleUrl,
        weatherUrl;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function($rootScope, _GeocodingAPI_, _WeatherAPI_, _$httpBackend_) {
        scope = $rootScope.$new();
        GeocodingAPI = _GeocodingAPI_;
        WeatherAPI = _WeatherAPI_;
        httpBackend = _$httpBackend_;
        googleUrl = 'http://maps.google.com/maps/api/geocode/json?address=sydney&sensor=false';
        weatherUrl = 'https://api.forecast.io/forecast/892e00e8eed58f98e6293e199512daee/25.2048493,55.2707828?callback=JSON_CALLBACK';
    }));


    it("GeocodingAPI.get should be defined", function () {
        expect(GeocodingAPI.get).toBeDefined();
    });


    it('WeatherAPI.get should be defined', function () {
        expect(WeatherAPI.get).toBeDefined();
    });


    it('should...', inject(function($controller) {
        expect(scope.timezone).toBeUndefined();
        expect(scope.daily).toBeUndefined();
        expect(scope.days).toBeUndefined();

        $controller('ForecastCtrl', {
            $scope: scope
        });

        // TODO...
    }));
});
