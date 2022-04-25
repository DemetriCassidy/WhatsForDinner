var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var session = require("express-session");
var app = express();
var PORT = process.env.PORT || 8000; // sets port based on app's environment
app.set("port", PORT);

// serves static files in ./public/ directory and its subdirectories
app.use(express.static(__dirname + "/public"));

// have app make use of body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// ensures favicon is served
app.use("/favicon.ico", express.static("public/images/favicon.ico"));

// make use of sessions middleware to save login status
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

// handles serving index page
app.get("/", (req, res) => {
    if (req.session.loggedIn) {
        // if logged in, redirect to main interface
        res.redirect("/home");
    } else {
        // if the user isn't logged in, have them do so
        res.sendFile(path.join(__dirname + "/public/login.html"));
    }
});

// check if user is logged in if they attempt to log in
app.get("/home", (req, res) => {
    if (req.session.loggedIn !== true) {
        res.redirect("/");
    } else {
        res.sendFile(path.join(__dirname + "/public/home.html"));
    }
});

// handles POST requests made when a user logs in
app.post("/auth", (req, res) => {
    // grab credentials from request body
    let username = req.body.username;
    let password = req.body.password;
    // ensure that username and password have values
    if (username && password) {
        // replacing this chunk later if we end up using the database
        const logins = require(path.join(
            __dirname + "/public/data/logins.json"
        ));
        for (let i = 0; i < logins["families"].length; i++) {
            if (
                logins["families"][i]["email"] === username &&
                logins["families"][i]["password"] === password
            ) {
                req.session.loggedIn = true;
                res.redirect("/home");
            } else {
                // res.send("Incorrect username/password!");
                res.redirect("/");
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
