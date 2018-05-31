"use strict";

module.exports = function (app) {
    var CategoriesController = require('../controllers/CategoriesController');

    app.route('/categories')
        .get(CategoriesController.getCategoriePage);
};