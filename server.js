//dependencies
var express = require("express");
var path = require("path");

//tells node that an 'express' server is being created
var app = express();

var PORT = process.env.PORT || 8080;

//allows Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes - this tells the server how to respond when a user is on the site
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});