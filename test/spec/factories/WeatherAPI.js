describe('WeatherAPI', function() {

    var theFactory,
        httpBackend,
        url;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(_WeatherAPI_, _$httpBackend_) {
            theFactory = _WeatherAPI_;
            httpBackend = _$httpBackend_;
            url = 'https://api.forecast.io/forecast/892e00e8eed58f98e6293e199512daee/25.2048493,55.2707828?callback=JSON_CALLBACK';
        })
    );

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('theFactory.get should be defined', function () {
        expect(theFactory.get).toBeDefined();
    });

    it('should show the correct lat/long coordinates', function() {

        // set up some data for the http call to return and test
        var returnData = { status: 200 };
        
        // expectJSONP to make sure it is called once
        httpBackend.expectJSONP(url).respond(returnData);
        
        // make the call...
        var returnedPromise = theFactory.get('25.2048493,55.2707828');
        
        // set up a handler for the response, putting the result
        // into a variable in this scope to test
        var result;
        returnedPromise.then(function(response) {
            result = response;
        });
        
        // flush the backend to make the request to do the expectedJSONP assertion
        httpBackend.flush();
        
        // check the result:
        expect(result).toEqual(returnData);

    });

});
