/*var fs = require('browserify-fs');

fs.readFile('public/data/grocery_list.json', 'utf8', function(err, json_data){
  console.log(json_data);
});*/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); // select list from html
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN"); 
  var txt = document.createTextNode("\u00D7"); // x symbol
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span); // adds the close button to each item on the list
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() { // adds on click function to close buttons
    var div = this.parentElement; 
    div.style.display = "none"; // stop displaying the task, doesn't actually delete it
  }
}

// Add a "checked" symbol when clicking on a list item REMOVE THIS PART AND PUT IN GROCERY.JS
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li"); // creates list item
  var inputValue = document.getElementById("myInput").value; // gets text from input
  var t = document.createTextNode(inputValue); // create html text from user input
  li.appendChild(t); // append the list with the new item
  if (inputValue === '') {
    alert("Item cannot be Null");
  } 
  else {
    document.getElementById("myUL").appendChild(li); // append to html list
  }
  document.getElementById("myInput").value = ""; // remove text from field

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function saveList() {
  var listName = document.getElementById("myName").value;
  console.log("List Name: " + listName);

  var itemList = document.getElementsByTagName("LI"); // select list from html
  //console.log("itemList: " + itemList);

  const itemArr = []; // items from list

  var i;
  for (i = 0; i < itemList.length; i++) {
    var temp = itemList[i].innerHTML; // returns str<span class="close">×</span> format
    console.log("  item: " + getValue(temp));
    itemArr[i] = getValue(temp);
  }

  var json_data = localStorage.getItem("groceryLists");
  console.log("getting data from storage");
  console.log(json_data);
  if(json_data == null) {
      console.log("json_data is null");
      json_data = getNewJSON(listName, itemArr);
  }
  else {
    json_data = JSON.parse(json_data);
    jsonList = makeListJSON(listName, itemArr); // get json formatted list 
    json_data.lists.push(jsonList); // append current list of lists with the new list
  }
  console.log(json_data);


  localStorage.setItem("groceryLists", JSON.stringify(json_data));
  

  /*let json = JSON.stringify(json_data)
  fs.writeFile('public/data/grocery_list.json', json, (err) => {
      if (err) console.log(err);
      console.log("Wrote to file!");
  });*/
}

function getValue(str) { // gets value from innerHTML format
  var rtn_str = "";
  var i;
  for (i = 0; i < str.length; i++) {
    if (str[i] === '<') // stop copying when you reach the <
      return rtn_str;
    rtn_str += str[i]; 
  }
  return rtn_str;
}

function makeListJSON(title, items) {
  let jsonList = '{"list":\"' + title + '\", "items":[';
  var i;
  for (i = 0; i < items.length; i++) {
    if (i+1 == items.length)
      jsonList += '{"item":\"' + items[i] + '\"}]}';
    else
      jsonList += '{"item":\"' + items[i] + '\"},';
  }
  return JSON.parse(jsonList);
  //return jsonList;
}

function getBlankJSON() {
  rtn_str = '{"lists":[]}';
  return rtn_str;
}

function getNewJSON(title, items) { // for if there is no localstorage data, must make new json obj
  let jsonList = '{"lists":[{"list":\"' + title + '\", "items":[';
  var i;
  for (i = 0; i < items.length; i++) {
    if (i+1 == items.length)
      jsonList += '{"item":\"' + items[i] + '\"}]}]}';
    else
      jsonList += '{"item":\"' + items[i] + '\"},';
  }
  return JSON.parse(jsonList);
  //return jsonList;
}
