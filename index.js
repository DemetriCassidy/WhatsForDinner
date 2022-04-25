var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8000; // sets port based on app's environment
app.set("port", PORT);

// serves static files in ./public/ directory and its subdirectories
app.use(express.static(__dirname + "/public"));

// have app make use of body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// ensures favicon is served
app.use("/favicon.ico", express.static("public/images/favicon.ico"));

// handles serving index page
app.get("/", (req, res) => {
    // req = request; res = response
    // res.send("Hello, world!");
});

// handles POST requests made when a user logs in
app.post("/auth", (req, res) => {
    // grab credentials from request body
    let username = req.body.username;
    let password = req.body.password;
    // ensure that username and password have values
    if (username && password) {
        // replacing this chunk later if we end up using the database
        const logins = require(__dirname + "/public/data/logins.json");
        for (let i = 0; i < logins["families"].length; i++) {
            if (
                logins["families"][i]["email"] === username &&
                logins["families"][i]["password"] === password
            ) {
                res.redirect("/");
            } else {
                res.send("Incorrect username/password!");
            }
        }
    } else {
        res.send("Please enter a username and password!");
    }
});

// ensures Node is listening for requests on the set port
app.listen(app.get("port"), () => {
    console.log(
        "What's For Dinner is running and listening on port",
        app.get("port")
    );
});
