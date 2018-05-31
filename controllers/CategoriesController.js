"use strict";
const url = require('url');

exports.getCategoriePage = function (req, res) {
	var categorie =  url.parse(req.url, true).query.cat;

    res.render('categories.ejs', {titre: categorie, cardNumber: 6, });
};