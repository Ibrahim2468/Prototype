"use strict";

// Ce module servira à charger tous les routers 
module.exports = function (app) {
    // Liste des routers
    const routers = [
        "LoginRouter",
        "HomeRouter",
        "CategoriesRouter"
    ]; 

    for (let router of routers) {
        require("./" + router)(app);
    }
}