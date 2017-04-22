// ===============================================================================
// LOAD DATA
// We are requiring our data sources for our routes
// These data sources hold arrays of information on table-data & waitinglist
var waitlist = require("../data/waitinglistData");
var tables = require("../data/tableData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	//add get and post routes for api
    app.get("/api/tables", function(req, res) {
        console.log("Reservations: ",tables);
        return res.json(tables);
    });


    //add get and post routes for api
    app.get("/api/waitlist", function(req, res) {
        console.log("Waitlist: ",waitlist);
        return res.json(waitlist);
    });

// add to tables
    app.post("/api/reserve", function(req, res) {
        var newreservation = req.body;

        console.log(newreservation);

        tables.push(newreservation);

        res.json(newreservation);
    });

    // add to tables
    app.post("/api/wait", function(req, res) {
        var newwait = req.body;

        console.log(newwait);

        waitlist.push(newwait);

        res.json(newwait);
    });

};