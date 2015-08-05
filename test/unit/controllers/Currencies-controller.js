'use strict';

describe("Unit: Testing CurrenciesController", function () {

    beforeEach(angular.mock.module('App.Controllers'));
    beforeEach(angular.mock.module('restangular'));
    beforeEach(angular.mock.module("ui.bootstrap"));

    it('should have a properly working CurrenciesController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('CurrenciesController', {
            $scope: scope
        });

        expect(scope.name).toEqual('Currencies');
    }));

});
