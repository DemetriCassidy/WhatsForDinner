const {getRecipe, getRecipeTitles, addToRecipe, removeFromRecipe} = require('../public/js/recipe')

describe('Recipe Tests', () => {
    it("Get Recipe Names", () => {
        expect(getRecipeTitles()).not.toBe([]); // should get something more than an empty array
    });
})

describe('Ingredient Tests', () => {
    it("Non-existant recipe returns empty array", () => {
        expect(getRecipe("Garbage Value")).toStrictEqual([]); // should return emptry array
    });
    it("Recipe returns filled array", () => {
        expect(getRecipe("Barbeque")).not.toBe([]); // Actual recipe should not return empty array
    });
    it("Parameters gotten from getRecipeTitles work", () => {
        expect(getRecipe(getRecipeTitles()[0])).not.toBe(null); // get a result from passing a title from getLists
    });
})

describe('Add to Recipe Tests', () => {
    it("Add ingredient to new list and return them combined", () => {
        expect(addToRecipe(new Array("one","two"), "three")).toStrictEqual(new Array("one","two","three")); // should return emptry array
    });
    it("Add ingredient to existing array", () => {
        let testArr = ["one", "two"];
        let resultArr = ["one", "two", "three"];
        expect(addToRecipe(testArr, "three")).toStrictEqual(resultArr); // should return emptry array
    });
})

describe('Delete From Recipe Tests', () => {
    it("Delete ingredient from list", () => {
        expect(removeFromRecipe(new Array("one","two","three"), "two")).toStrictEqual(new Array("one","three")); // should return emptry array
    });
    it("Deleting from empty list returns empty list", () => {
        expect(removeFromRecipe(new Array(), "three")).toStrictEqual(new Array()); // should return emptry array
    });
    it("List returns unchanged if ingredient not on list", () => {
        let testArr = ["one","two","three"]
        expect(removeFromRecipe(testArr, "four")).toStrictEqual(testArr); // should return emptry array
    });
})