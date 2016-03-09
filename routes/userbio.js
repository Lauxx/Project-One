//this is for visionboard.ejs--userbio form

var express = require('express');
var router = express.Router();

var UserBio = require('../models/userbio');

router.route('/visionboard')
  .get(function(req, res, next){

    UserBio.find()
    .populate('author')
    .exec(function(err, bio){
        if(err){
            console.log(err);
            next();
        } else {
            res.json(bio);
        } 
    });
  })

  .post(function(req, res, next){
    var userbio = new UserBio();
    userbio.author = req.user._id || '56e047c34eae68a81fcd655a';
    userbio.biocontent = req.body.biocontent || 'none';
    userbio.bioimage = req.body.bioimage || 'none';

    console.log(userbio.author);


    userbio.save(function(err, bio){
      if(err){
          console.log(err);
          next();
      } else {
        res.json(bio)
        // res.redirect('/visionboard')
      }
    });
  })

  module.exports = router;