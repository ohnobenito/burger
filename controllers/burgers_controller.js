let express = require("express");
const cat = require("../../../PRACTICE FUN TIME/01-Class-Content/13-MVC/01-Activities/17-CatsApp/Unsolved/models/cat.js");
let router = express.Router();
let burger = require("../models/burger.js");

//Creating Routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

