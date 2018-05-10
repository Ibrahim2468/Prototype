"use strict";

module.exports = function (app) {
    var loginController = require('../controllers/LoginController');

    app.route('/connexion')
        .get(loginController.getLoginPage)
        .post(loginController.postLoginPage);
};