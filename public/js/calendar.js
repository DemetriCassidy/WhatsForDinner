//Temporary Hardcoded data
let people = [
    { name: "Demetri", Sunday: "out", Monday: "cook", Tuesday: "eat", Wednesday: "cook", Thursday: "out", Friday: "out", Saturday: "out"},
    { name: "Jack", Sunday: "cook", Monday: "eat", Tuesday: "cook", Wednesday: "eat", Thursday: "out", Friday: "eat", Saturday: "out",},
    { name: "Josh", Sunday: "eat", Monday: "eat", Tuesday: "out", Wednesday: "eat", Thursday: "out", Friday: "cook", Saturday: "out",},
];

//    { name: "Dmitrij", Sunday: "eat", Monday: "out", Tuesday: "eat", Wednesday: "out", Thursday: "cook", Friday: "out", Saturday: "out",},
//{ name: "Dmeatree", Sunday: "eat", Monday: "out", Tuesday: "out", Wednesday: "out", Thursday: "out", Friday: "out", Saturday: "out",},

dayOfTheWeek= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',    
    'Friday',
    'Saturday',
];

mealOfTheDay= [
    'Fried Rice',
    'Chicken Soup',
    'Spaghetti',
    'Cheseburgers',
    'Pizza',
    'Chicken Cutlets',
    'Pasta Fajioli'
];
  
//used to get curent date and the day the week started
function createCalendar() {
    var today = new Date;                               // get current date
    var Sunday = today.getDate() - today.getDay();      // First day is the day of the month - the day of the week
    var Saturday = Sunday + 6;                          // last day is the first day + 6
    
    var firstday = new Date(today.setDate(Sunday)).toDateString();
    var lastday = new Date(today.setDate(Saturday)).toDateString();
}

function generateTable(table, people) {

    let row = table.insertRow();
    row.insertCell();
    
    for (i= 0; i < people.length; i++) {
      let cell = row.insertCell();
        
      cell.setAttribute("style", "border: 2px solid black; text-align: center; padding: 8px 8px;");
        
      let text = document.createTextNode(people[i]["name"]);
      cell.appendChild(text);
    }

    for (i= 0; i < 7; i++) {
      let row = table.insertRow();

      let cell = row.insertCell();

      cell.setAttribute("style", "border: 2px solid black; text-align: center; height:184px");

      let day = dayOfTheWeek[i];
      let daytext = document.createTextNode(day);
      cell.appendChild(daytext);                            //day of the week

      nextLine = document.createElement("br");
      cell.appendChild(nextLine);
  
      let meal = mealOfTheDay[i]; //Will be getting this from the backend in fututre
      let mealChoice = document.createElement("INPUT");
      mealChoice.setAttribute("type", "text");
      mealChoice.setAttribute("value", meal);
      cell.appendChild(mealChoice);


        for (j = 0; j < people.length; j++) {               //for each person reads their opinion on that day
            let cell = row.insertCell();
            let place = "spot" + i + "," + j;
            let text = document.createTextNode(people[j][day]);

            cell.setAttribute("style", "border: 2px solid black; text-align: center; height:184px");
            cell.setAttribute("class", people[j][day]);
            cell.setAttribute("id", place);
            cell.setAttribute("onclick", 'stateChange("' + place + '")' );

            if (people[j][day] == "cook") {
                cell.appendChild(text);
            }
            if (people[j][day] == "eat") {
            }
            if (people[j][day] == "out") {
                out(cell);
            }
        }
    }
}

//displays the crossed out image
function out(cell) {
    var ex = document.createElement("img");
    ex.setAttribute("src", "images/redline.jpg");
    ex.setAttribute("style", "display:block; object-fit: cover;");
    cell.setAttribute("style", "padding: 0px 0px; border: 2px solid black; margin: 0px; height:184px");
    ex.setAttribute("alt", "crossed out");
    cell.appendChild(ex);
}

//when a table cell is pressed it changes the state to either a blank square (eat), a red line (out), or the word cook
function stateChange(place) { 
    cell = document.getElementById(place);
    state = cell.getAttribute('class');

    if (state == "eat") {                                      //change state to "out"
      removeChild(cell);

      out(cell);                                              //add "out" image
        
      cell.setAttribute("class", "out");
    }
    else if (state == "out") {                                //change state to "cook"
      removeChild(cell);

      cell.setAttribute("style", "border: 2px solid black; text-align: center; height:184px");
      
      let text = document.createTextNode("cook"); 
      cell.appendChild(text);                                 //add "cook" text

      cell.setAttribute("class", "cook");
    }
    else if (state == "cook") {                               //change state to "eat"
      removeChild(cell);

      cell.setAttribute("style", "border: 2px solid black; text-align: center; height:184px");
      
      cell.textContent = "";                                  //blank text

      cell.setAttribute("class", "eat");
    }
}

//removes current state
function removeChild(cell) {
    if(cell.children.length > 0){                           //remove current child if there is one
        cell.removeChild(cell.firstElementChild);
    }   
}

let table = document.querySelector(".calendarTable");
generateTable(table, people);     //generate the table first

module.exports = {generateTable, out, stateChange, removeChild}
