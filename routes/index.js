var express = require("express");
var router = express.Router();


const indexValidation = require("../validations/indexValidation");


const { index ,indexPost,deleteColor} = require("../controllers/indexController");


router.get("/", index);
router.post("/", indexValidation, indexPost);
router.post("/delcolor",deleteColor);

module.exports = router;