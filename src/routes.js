const express =require('express');
const routes = require('express').Router(); 
const firebase = require("firebase");
const firebaseConfig = require('./config/firebase');
const controler = require('./controllers/crud');


firebase.initializeApp(firebaseConfig);

routes.post('/data',controler.store);
routes.get('/data',controler.read);
routes.delete('/data/:name',controler.delete);
module.exports=routes;