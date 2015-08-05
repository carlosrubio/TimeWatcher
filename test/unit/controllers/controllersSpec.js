'use strict';

describe("Unit: Testing Controllers", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working homeController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('homeController', {
            $scope: scope, Loki: lokiAngular
        });

        expect(scope.greeting).toEqual('Welcome');
    }));

});
