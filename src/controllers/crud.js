const firebase = require("firebase");
const firebaseConfig = require('../config/firebase');
const Data = require('../models/Data')

module.exports={
    async store(req,res){
        const {name,ph} = req.body;
        var referencia =firebase.database().ref('data/'+name);
        referencia.set({
            ph:ph
          }); 
        return res.json(req.body); 
    },
    async read(req,res){  
        var referencia = firebase.database().ref('data');
         referencia.on('value', function(snapshot) {
            const response = snapshot.val();
            return res.json(response);
          });
    },
    async delete(req,res){
      const {name} = req.params;
      var referencia = firebase.database().ref('data/'+name).remove();
      return res.json(name);
    }
};