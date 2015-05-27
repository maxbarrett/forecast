describe('dateFactory', function() {

    var theFactory; 

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(dateFactory) {
            theFactory = dateFactory;
        })
    );

    it('should format the date from a unix timestamp', function() {
        expect(theFactory.formatDate(1432645880)).toEqual('Tuesday 26 May 2015');
    });

    it('should get the correct hour from a date object', function() {
        expect(theFactory.getHour(new Date('Wed May 27 2015 22:00:00 GMT+1000 (AEST)'))).toEqual('22');
    });

    it('should extract the day from a date object', function() {
        expect(theFactory.getDay(new Date('Wed May 27 2015 22:00:00 GMT+1000 (AEST)'))).toEqual(3);
    });

    it('should show day name from index', function() {
        expect(theFactory.getDayName(3)).toEqual('Wednesday');
    });

    it('should create a new date object from a unix timestamp', function() {
        expect(theFactory.getDate(1432670400)).toEqual(new Date('Wed May 27 2015 06:00:00 GMT+1000 (AEST)'));
    });

    it('should show the correct date from a unix timestamp', function() {
        expect(theFactory.getMonth(5)).toEqual('June');
    });


});

