//stub

var users = {"users":[
    {"name" : "Jack", "pass" : "jack123"},
    {"name" : "Josh", "pass" : "josh123"},
    {"name" : "Demetri", "pass" : "demetri123"}
]}

function isValidLogin(username, password) {
    if (username === "admin" && password === "admin123") { // fake login credentials, eventually will be db query
        return true
    }
    else 
        return false
}

module.exports = isValidLogin