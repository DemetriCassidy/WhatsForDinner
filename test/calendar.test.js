const  {generateTable, out, stateChange, removeChild} = require('../public/js/calendar')

let people = [
    { name: "Demetri", Sunday: "out", Monday: "cook", Tuesday: "eat", Wednesday: "cook", Thursday: "out", Friday: "out", Saturday: "out"},
    { name: "Jack", Sunday: "cook", Monday: "eat", Tuesday: "cook", Wednesday: "eat", Thursday: "out", Friday: "eat", Saturday: "out",},
    { name: "Josh", Sunday: "eat", Monday: "eat", Tuesday: "out", Wednesday: "eat", Thursday: "out", Friday: "cook", Saturday: "out",},
];

dayOfTheWeek= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',    
    'Friday',
    'Saturday',
];

describe('Calendar Tests', () => {
    //let table = document.querySelector("table");
    document.createElement("table");

    //document.body.innerHTML = '<table id="test"></table>';

    let table = document.querySelector("table");
    generateTable(table, people);    

    place = "spot" + 0 + ","+ 0;
    cell = document.getElementById(place);                  

    it("First state 'out' ", () => {
        expect(cell.getAttribute('class')).toBe("out");
    });

    stateChange(place);

    it("State change to 'cook' ", () => {
        expect(cell.getAttribute('class')).toBe("cook");
    });

    stateChange(place);

    it("State change to 'eat' ", () => {
        expect(cell.getAttribute('class')).toBe("eat");
    });

    stateChange(place);

    it("State change back to 'out' ", () => {
        expect(cell.getAttribute('class')).toBe("out");
    });
})

state = cell.getAttribute('class');
