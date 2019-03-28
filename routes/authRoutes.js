
var express = require('express');
var router = express.Router();
var con = require('../lib/connection');

router.post("/login", (req, res) => {
    console.log("called == ", req);
    return res.status(200).send({
        success: true,
        message: "Successful"
    })
})

module.exports = router;