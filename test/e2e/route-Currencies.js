/*jshint node:true */
'use strict';

describe("E2E: Testing Routes Currencies", function () {

    it('should have a working /Currencies route', function () {
        browser().navigateTo('#/Currencies');
        expect(browser().location().path()).toBe("/Currencies");
    });

});
