const express = require("express");
const router = express.Router();
const topTenConfirm = require('../topTenConfirm');
const topThai = require('../topThai');

router.get('/world', (req, res) => {
    res.render('covid', {
        topTenConfirm
    });
});

router.get('/thailand', (req, res) => {
    res.render('covidthai', {
        topThai
    });
});
module.exports = router;