const createList = require('../public/js/grocery')

describe('Grocery List Tests', () => {
    it("Try to create list", () => {
        expect(createList("Jack")).toBe(true);
    });
})