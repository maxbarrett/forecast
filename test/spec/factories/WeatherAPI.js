describe('WeatherAPI', function() {

    var theFactory; 

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(WeatherAPI) {
            theFactory = WeatherAPI;
        })
    );

    it('should return a truthy value from lat/long lookup', function() {
        expect(theFactory.get(-33.8674869,151.2069902)).toBeTruthy();
    });

});
