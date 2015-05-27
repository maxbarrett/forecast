describe('GeocodingAPI', function() {

    var theFactory,
        httpBackend,
        GeocodingAPICall;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(GeocodingAPI, $httpBackend) {

            // var mock = {
            //      currently: {},
            //      daily: {
            //          data:[{}, {}, {}, {}, {}, {}, {}, {}]
            //      },
            //      flags: {},
            //      hourly: {},
            //      latitude: -33.8696,
            //      longitude: 151.207,
            //      offset: 10,
            //      timezone: "Australia/Sydney"
            //  }

            theFactory = GeocodingAPI;
            httpBackend = $httpBackend;
            //httpBackend.whenJSONP().respond(mock);
        })
    );

    // http://stackoverflow.com/questions/19096300/testing-jsonp-resource-angularjs

    it('should show the correct lat/long coordinates', function() {
        var returnData = { testing: 'anything'};

        httpBackend.expectJSONP('http://maps.google.com/maps/api/geocode/json?address=sydney&sensor=false').respond(returnData);

        theFactory.get({location:'sydney'}, function(){
            expect(location.testing).toEqual('anything');
        })

        httpBackend.flush();
    });

});
