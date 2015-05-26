describe('Utils', function() {

    var theFactory; 

    beforeEach(module('forecastApp'));

    beforeEach(inject(function(Utils) {
            theFactory = Utils;
        })
    );

    it('should slice the right number from an array', function() {
        expect(theFactory.slice([1,2,3,4,5,6,7,8,9], 5)).toEqual([1,2,3,4,5]);
    });

});
