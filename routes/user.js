var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {  // creates a new user in database; also hands off to passport to do authentication with
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/visionboard', // redirect to the secure profile section
       failureRedirect: '/login', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
    }));

    app.get('/login', function(req, res) {
       // render the page and pass in any flash data if it exists
       res.render('login.ejs', {
           message: req.flash('loginMessage')
       });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/user', function(req, res){
      if(req.user){
          User.findById({_id: req.user._id}, function(err, user) {
            if(err) {
              console.log(err);
            } else {
              res.json(user);
            }
          })         
        } else {
          res.json({message: "no user signed in"});
        }

    });

//NOT SURE WHERE THIS ONE GOES
    app.put('/api/user/:user_id', function(req, res){
      console.log("TRYING TO PUTTTTT!!!!")
        User.findById({_id: req.params.user_id}, function(err, user) {
          if(err) {
            console.log(err);
          } else {
            user.local.bio = req.body.bio ? req.body.bio : user.local.bio;
            user.local.profileImage = req.body.profileImage ? req.body.profileImage : user.local.profileImage;
            console.log("SUCCESS!!")
            user.save(function(err, update){
              if(err) {
                console.log(err)
              } else {
                res.json(update);
              }
            })
          }
        })
      
    }) 
};