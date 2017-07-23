var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	console.log('Routed');
	burger.all(function(data) {
		var burgerObject = {
		  burgers: data
		};
		res.render("index", burgerObject);
	});
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;