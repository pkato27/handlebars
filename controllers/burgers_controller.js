// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;






// var express = require("express");

// var router = express.Router();

// // import the model (burger.js) to use its database functions

// var burger = require("../models/burger.js");

// // Create all our routes and set up logic

// router.get("/", function(req, res){
//     burger.all(function(data){
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index",hbsObject);
//     });
// });

// router.post("/burgers",function(req, res){
//     burger.create([
//         "burger_name"
//     ], [
//         req.body.burger_name

//     ], function(result){
//         res.json({ id: result.insertID});
//     });
// });

// router.put("/burgers/:id", function(req, res){
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.update({
//         devoured: true
//     }, condition, function(result){
//         if(result.changedRows == 0){
//             //if no rows were changed, then the ID must not exist
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// // router.delete("/api/burgers/:id", function(req, res){
// //     var condition = "id = " + req.params.id;

// //     burger.delete(condition, function(result){
// //         if (result.affectedRows == 0) {
// //             return res.status(404).end();

// //         } else {
// //             res.status(200).end();
// //         }
// //     });
// // });




// // Export routes for server.js to use.
// module.exports = router;