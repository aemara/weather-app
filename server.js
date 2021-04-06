// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));



// Setup Server

const port = 3000;
const server = app.listen(port,listening);

function listening() {
    console.log(`running on localhost: ${port}`);
};


// GET route
app.get('/', sendHello);

function sendHello (req,res) {
    console.log("hello world");
};

const data = [];
app.post('/add', function (req,res) {
    data.push(req.body);
    console.log(data);
})



