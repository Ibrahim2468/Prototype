"use strict";

exports.getHomePage = function (req, res) {
    res.render('index.ejs', {cardNumber: 6});
};