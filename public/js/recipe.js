/*const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Daly123",
    database: "wfd"
})*/

var json_data = localStorage.getItem("recipes");
json_data = JSON.parse(json_data);
if(json_data == null) {
    console.log("json_data is null");
    json_data = {"recipes":[
        {"title":"Example Recipe", "ingredients":[
            {"ingredient":"Example Ingredient"}
        ]}
    ]};
}


//var json_data = require('../data/recipes.json');

/*var recipe_titles = getRecipeTitles();
console.log("titles: ")
for (i in recipe_titles) { 
    console.log(recipe_titles[i])
    let ingredients = getRecipe(recipe_titles[i]);
    for (j in ingredients)
        console.log("    " + ingredients[j]);
}*/
    

/*let recipe_list = document.querySelector("#recipe_list");

recipe_titles.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    recipe_list.appendChild(li);
  });*/

/*function getAllRecipes() {
    client.connect();

    client.query('SELECT title FROM public."Recipe"', (err, res)=>{
        if(!err){
            json_data = res.rows;
            console.log(json_data);

            const arr = [];
            for (var i in json_data){
                console.log(json_data[i]["title"]);
                arr.push(json_data[i]["title"]);
            }
            
            return arr;
        } 
        else {
            console.log(err.message);
        }
        client.end;
    })
}*/

function getRecipeTitles(){
    let arr = [];
    for (var i in json_data.recipes){
        //console.log(json_data.recipes[i]["title"]);
        arr.push(json_data.recipes[i]["title"])
    }
    return arr;
}

function getRecipe (name){
    let arr = [];
    for (var i in json_data.recipes){
        if (json_data.recipes[i]["title"] == name){
            for (var j in json_data.recipes[i]["ingredients"]){
                //console.log(json_data.recipes[i]["ingredients"][j]);
                arr.push(json_data.recipes[i]["ingredients"][j]["ingredient"]);
            }
        }
    }
    return arr;
}

function addToRecipe(list, ingredient) {
    list.push(ingredient);
    return list;
}

function removeFromRecipe(list, ingredient) {
    returnArr = [];
    if (list == [])
        return returnArr; // can't delete from nothing
    
    for (var i in list) {
        if (list[i] != ingredient)
            returnArr.push(list[i]);
    }
    return returnArr;
}

function printArr(arr) {
    for (i in arr)
        console.log(arr[i]);
}

const recipes = document.querySelector("#recipe_list");

var recipe_titles = getRecipeTitles();

for (i in recipe_titles) { 
    console.log(recipe_titles[i])

    recipes.innerHTML += ('<ul style="text-decoration: underline;">' + recipe_titles[i]); // start and name list
    let ingredients = getRecipe(recipe_titles[i]);
    for (j in ingredients) {
        console.log("    " + ingredients[j]);
        recipes.innerHTML += ('<li style="padding-left: 50px;">' + ingredients[j] + '</li>'); // append to list
    }
    recipes.innerHTML += '</ul>'; // close list
}

function clearRecipes() {
    console.log("clearRecipes Called");
    localStorage.removeItem("recipes");
    //window.location.reload();
}