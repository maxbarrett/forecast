'use strict';

describe('MainCtrl', function() {
    var scope;

    beforeEach(module('forecastApp'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should define where the app is made', inject(function($controller) {
        expect(scope.made).toBeUndefined();

        $controller('MainCtrl', {
            $scope: scope
        });

        expect(angular.isString(scope.made)).toBeTruthy();
        expect(scope.made).toEqual('Made in Sydney, Australia');
    }));
});
