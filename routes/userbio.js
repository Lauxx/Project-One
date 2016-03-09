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
    userbio.author = req.user || '12345355'; //ask doug
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

router.route('/visionboard/:userbio_id') //ask Doug
  .get(function(req, res, next){
      UserBio.find(req.params.userbio_id, function(err, bio){
        if (err){
          console.log(err);
          next();
        } else {
          res.json(bio)
        }
      });
    })

  .put(function(req, res, next){
      UserBio.findById(req.params.userbio_id, function(err, bio){//ask Doug why it's findbyid
        if(err){
          console.log(err);
          next();
        } else {
          userbio.biocontent = req.body.biocontent ? req.body.biocontent : userbio.biocontent;
          userbio.bioimage = req.body.bioimage ? req.body.bioimage : userbio.bioimage;

          userbio.save(function(err, bio){
            if(err){
              console.log(err);
              next();
            } else {
              res.json({message: "bio updated!"})
            }
          })
        }
    });
  })

  .delete(function(req, res, next){
      UserBio.remove({_id: req.params.userbio_id}, function(err, bio){
        if(err){
          console.log(err);
          next();
        } else {
          console.log(UserBio);
          res.json({message: "bio deleted!"})
        }
      });
  })

  module.exports = router;