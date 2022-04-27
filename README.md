# What's For Dinner


**What's For Dinner** is a prototype for a hypothetical web application for
collaborative meal planning. It was created as part of a semester-long project
for the Software Engineering II class (COMP.4120) at UMass Lowell.

## Running Application Server Locally
Before the application's server can be run on a developer's local machine,
make sure that Node.js and npm are installed. If they are not already installed,
download the latest Node.js release from [here](https://nodejs.org/en/). Once
this is done, install all required dependencies by running `npm install` in your
terminal. From here, you can start the server by running `node index.js` in the 
directory it's located in. The interface can be accessed from your web browser 
of choice by visiting localhost:8000. Log in with the username "fakeperson@fakecollege.edu"
and the password "password123!".

## Testing
To run unit tests on the program simply enter "npm test" into a terminal.

## Continuous Integration
The actions log in the GitHub repo shows bulid history.
Our Heroku app automatically builds every time we push to this GitHub.
