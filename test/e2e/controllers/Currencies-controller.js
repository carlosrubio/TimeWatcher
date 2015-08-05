//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing Currencies", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working Currencies page ', function () {
        browser().navigateTo('#/Currencies');
        expect(browser().location().path()).toBe("/Currencies");
        expect(element('[class="col-lg-12"]').html()).toContain('Currencies');
    });

});
