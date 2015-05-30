describe('GeocodingAPI', function() {

    var theFactory,
        httpBackend,
        url;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(_GeocodingAPI_, _$httpBackend_) {
            theFactory = _GeocodingAPI_;
            httpBackend = _$httpBackend_;
            url = 'https://maps.google.com/maps/api/geocode/json?address=sydney&sensor=false';
        })
    );

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("GeocodingAPI.get should be defined", function () {
        expect(theFactory.get).toBeDefined();
    });

    it('should send the request and return a response', function() {

        // set up some data for the http call to return and test
        var returnData = { status: 200 };
        
        // expectGET to make sure it is called once
        httpBackend.expectGET(url).respond(returnData);
        
        // make the call...
        var returnedPromise = theFactory.get('sydney');
        
        // set up a handler for the response, putting the result
        // into a variable in this scope to test
        var result;
        returnedPromise.then(function(response) {
            result = response;
        });
        
        // flush the backend to make the request to do the expectedGET assertion.
        httpBackend.flush();
        
        // check the result:
        expect(result).toEqual(returnData);

    });

});
