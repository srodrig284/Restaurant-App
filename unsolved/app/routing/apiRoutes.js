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
       // console.log("Reservations: ",tables);
        return res.json(tables);
    });


    //add get and post routes for api
    app.get("/api/dispwait", function(req, res) {
      //  console.log("Waitlist: ",waitlist);
        return res.json(waitlist);
    });

    app.get("/api/clear", function(req, res) {
        tables = [];
        waitlist = [];
        //return res.json(waitlist, tables);
    });

// add to tables
    app.post("/api/reserve", function(req, res) {

        if(tables.length < 5)
        {
            tables.push(req.body);
            res.json(true);
        }
        else
        {
            waitlist.push(req.body);
            res.json(false);
        }
    });
};