const tabshift = require('../public/js/tabs');

describe('Function runs to completion', () => {
    it("Get Grocery Lists", () => {
        expect(getLists()).toBeTruthy(); // Runs
    });
})