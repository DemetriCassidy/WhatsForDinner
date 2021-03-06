//import {jest} from '@jest/globals'

console.log("Running Grocery.js");

//var json_data = require('../data/grocery_list.json');

var json_data = localStorage.getItem("groceryLists");
json_data = JSON.parse(json_data);
if(json_data == null) {
    console.log("json_data is null");
    json_data = {"lists":[
        {"list":"Example List", "items":[
            {"item":"Example Item"}
        ]}
    ]};
}

function createList(listName) {
    const express = require('express');
    const app = express();
    const mssql = require("mysql");
    
    // Get request
    app.get('/', function (req, res) {
    
        // Config your database credential
        const config = {
            user: 'root',
            password: 'pass123',
            server: 'localhost',
            database: 'wfd'
        };
    
        // Connect to your database
        mssql.connect(config, function (err) {
    
            // Create Request object to perform
            // query operation
            var request = new mssql.Request();
    
            // Query to the database and get the records
            request.query('INSERT INTO Grocery_List VALUES(2000,2000, "weekly shopping")',
                function (err, records) {
                    console.log(records)
                    if (err) console.log(err)
                        
                    // Send records as a response
                    // to browser
                    res.send(records);
                    return false
                });
        });
    });

    return true;
}

function getLists(){
    let arr = [];
    for (var i in json_data.lists){
        //console.log(json_data.lists[i]["list"]);
        arr.push(json_data.lists[i]["list"])
    }
    return arr;
}

function getListItems (name){
    let arr = [];
    for (var i in json_data.lists){
        if (json_data.lists[i]["list"] == name){
            for (var j in json_data.lists[i]["items"]){
                //console.log(json_data.lists[i]["ingredients"][j]);
                arr.push(json_data.lists[i]["items"][j]["item"]);
            }
        }
    }
    return arr;
}

const lists = document.querySelector("#shopping_lists");

//console.log(lists);

var list_titles = getLists();

for (i in list_titles) { 
    console.log(list_titles[i])
    lists.innerHTML += ('<ul style="text-decoration: underline;">' + list_titles[i]); // start and name list
    let ingredients = getListItems(list_titles[i]);
    for (j in ingredients) {
        console.log("    " + ingredients[j]);
        lists.innerHTML += ('<li style="list-style: none; padding-left: 45px;"><input type="checkbox" id="groceries" name="groceries" value="grocery-list"><label for="groceries" style="padding-left: 15px">' + ingredients[j] + '</label></li>'); // append to list
    }
    lists.innerHTML += '</ul>'; // close list
}

function clearLists() {
    localStorage.removeItem("groceryLists");
    window.location.reload();
}

//module.exports = {createList: createList, getLists: getLists, getListItems: getListItems}

