// ==============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
// ==============================================================================
// ===============================================================================
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server

// Sets up the Express App
// Sets an initial port. We"ll use this later in our listener
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// BodyParser makes it possible for our server to interpret data sent to it.
// Add the standard 4 lines of code to use bodyParser as middleware
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// requre api routes, pass the app object to the module 
// run the module's function to set our app routes
require("./app/routing/apiRoutes")(app);

//add require for html routes
require("./app/routing/htmlRoutes")(app);


// Basic route that sends the user first to the AJAX Page

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

