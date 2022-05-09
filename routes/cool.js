var express = require("express");
var router = express.Router();

router.get('/cool', (req, res, next) => {
    res.send("You're so cool\n");
});

module.exports = router;