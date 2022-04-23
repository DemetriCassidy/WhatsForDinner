const {createList, getLists, getListItems} = require('../public/js/grocery');

describe('Grocery List Tests', () => {
    it("Get Grocery Lists", () => {
        expect(getLists()).not.toBe([]); // should get something more than an empty array
    });
})

describe('Grocery List Item Tests', () => {
    it("Non-existant grocery list returns empty array", () => {
        expect(getListItems("Garbage Value")).toStrictEqual([]); // should return emptry array
    });
    it("List returns filled array", () => {
        expect(getListItems("Waffles")).not.toBe([]); // Actual recipe should not return empty array
    });
    it("Parameters gotten from getListItems work", () => {
        expect(getListItems(getLists()[0])).not.toBe(null); // get a result from passing a title from getLists
    });
    // Tests for adding items to a grocery list
    it("Attempting to add an item does not result in an empty array", () => {
        // Add item to list (add beer to BBQ list)
        // Get new list of items
        let newList = getListItems(getLists()[1]);
        // Check if new list is not empty
        expect(newList).not.toStrictEqual([]);

    });
    it("Adding an item to list results in different list than before", () => {
        // Add item to list  (add beer to BBQ list)
        // Get new list
        let newList = getListItems(getLists()[1]);
        // Compare new list with original list
        let originalList = [
            "Hamburger Meat",
            "Hotdogs", 
            "Buns", 
            "Ketchup",
            "Mustard", 
            "Chips"
        ];
        expect(newList).not.toStrictEqual(originalList);

    });
    it("Adding an item to a list gives expected results", () => {
        // Add item to list (add beer to BBQ list)
        // Get new list of items
        let newList = getListItems(getLists()[1]);
        // Compare new list with expected list
        let expectedList = [
            "Hamburger Meat",
            "Hotdogs", 
            "Buns", 
            "Ketchup",
            "Mustard", 
            "Chips",
            "Beer"
        ];
        expect(newList).toStrictEqual(expectedList);
    });
    // Tests for deleting items from a grocery list
    it("Attempting to delete an item does not destroy array", () => {
        // Remove item from array
        // Get new list of items
        let newList = getListItems(getLists()[1]);
        // Checks if array for new list is empty
        expect(newList).not.toStrictEqual([]);
    });
    it("Deleting an item results in different list than before", () => {
        // Remove item from array
        // Get new list of items
        let newList = getListItems(getLists()[1]);
        // Compare new list with original list
        let originalList = [
            "Hamburger Meat",
            "Hotdogs", 
            "Buns", 
            "Ketchup",
            "Mustard", 
            "Chips",
            "Beer"
        ];
        expect(newList).not.toStrictEqual(originalList);
    });
    it("Deleting an item to a list gives expected results", () => {
        // Remove item from array
        // Get new list of items
        let newList = getListItems(getLists()[1]);
        // Compare new list with expected list
        let expectedList = [
            "Hamburger Meat",
            "Hotdogs", 
            "Buns", 
            "Ketchup",
            "Mustard", 
            "Chips"
        ];
        expect(newList).toStrictEqual(expectedList);
    });
})
