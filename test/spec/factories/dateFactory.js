describe('dateFactory', function() {

    var theFactory; 

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(dateFactory) {
            theFactory = dateFactory;
        })
    );

    it('should show the correct date from a unix timestamp', function() {
        expect(theFactory.formatDate(1432645880)).toEqual('Tuesday 26 May 2015');
    });

});

