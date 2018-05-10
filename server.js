"use strict";

const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configuration de express
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Configuration de la base de données mongoose
mongoose.set('debug', 'true');
const db = require('./dbconfig');

// Creation d'une connection à la base de données
// A noter que le chargement des modèles(non encore disponible) doit préceder cette partie
/*
mongoose.Promise = global.Promise;
mongoose.connect(db.url); 
*/

// Mis en place des routers
const importAndLoadRoutes = require('./routers/setup');
importAndLoadRoutes(app);

app.listen(port, function(){
  console.log('Server a demarée sur le port:' + port);
});