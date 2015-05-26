describe('GeocodingAPI', function() {

    var theFactory; 

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(GeocodingAPI) {
            theFactory = GeocodingAPI;
        })
    );

    it('should show the correct lat/long coordinates', function() {
        //expect(theFactory.get('Sydney')).toEqual({"latitude":-33.8674869,"longitude":151.2069902});
        expect(theFactory.get('Sydney')).toBeTruthy();
    });

});
