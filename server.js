var express = require("express");
var bodyPars = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));


app.use(bodyPars.urlencoded({ extended: true}));

//parse application/json

app.use(bodyPars.json());

// set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server acces to them.

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start our server so that it can begin listening to client requests

app.listen(PORT, function(){
    //log (server-side) when our server has started
    console.log("listening on localhost" + PORT);
})