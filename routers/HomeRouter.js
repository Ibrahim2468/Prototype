"use strict";

module.exports = function (app) {
    var HomeController = require('../controllers/HomeController');

    app.route('/')
        .get(HomeController.getHomePage);
};