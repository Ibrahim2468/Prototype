"use strict";
const url = require('url');

exports.getCategoriePage = function (req, res) {
	var categorie =  url.parse(req.url, true).query.cat;

    res.render('categories.ejs', {titre: categorie, cardNumber: 6, });
};

exports.getLivrePage = function (req, res) {
	var livre =  url.parse(req.url, true).query.livre;

    res.render('livre.ejs', {titre: livre, cardNumber: 1, });
};

