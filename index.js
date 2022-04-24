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
    // ensure that username and passord have values
    if (username && password) {
        res.send(`Username: ${username}, Password: ${password}`);
        res.end();
    } else {
        res.send("Please enter a username and password!");
        res.end();
    }
    console.log(req.body);
});

// ensures Node is listening for requests on the set port
app.listen(app.get("port"), () => {
    console.log(
        "What's For Dinner is running and listening on port",
        app.get("port")
    );
});
