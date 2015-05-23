'use strict';

describe('Controller: ForecastCtrl', function() {

    // load the controller's module
    beforeEach(module('forecastApp'));

    var ForecastCtrl,
        scope,
        daysMock = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ForecastCtrl = $controller('ForecastCtrl', {
            $scope: scope,
            days: daysMock
        });
    }));

    it('should attach an array of days to the scope', function() {
        expect(scope.days.length).toBe(7);
    });
});