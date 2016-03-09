//this is for visionboard.ejs--userbio form

var express = require('express');
var router = express.Router();

var Goal = require('../models/goal');

router.route('/visionboard')
  .get(function(req, res, next){

    Goal.find()
    .populate('author')//ask Doug?
    .exec(function(err, goal){
        if(err){
            console.log(err);
            next();
        } else {
            res.json(goal);
        } 
    });
  })

  .post(function(req, res, next){
    var goal = new Goal();
   
    goal.intention = req.body.intention || 'none';
    goal.taskList = req.body.taskList || 'none';
    goal.startDate = req.body.startDate || 'none';
    goal.endDate = req.body.endDate || 'none';

    console.log(goal);


    goal.save(function(err, goal){
      if(err){
          console.log(err);
          next();
      } else {
        res.json(goal)
        // res.redirect('/visionboard')
      }
    });
  })

router.route('/visionboard/:goal_id') //ask Doug
  .get(function(req, res, next){
      Goal.find(req.params.goal_id, function(err, goal){
        if (err){
          console.log(err);
          next();
        } else {
          res.json(goal)
        }
      });
    })

  .put(function(req, res, next){
      Goal.findById(req.params.goal_id, function(err, goal){//ask Doug why it's findbyid
        if(err){
          console.log(err);
          next();
        } else {
            goal.intention = req.body.intention ? req.body.intention : goal.intention;
            goal.taskList = req.body.taskList ? req.body.taskList : goal.taskList;
            goal.startDate = req.body.startDate ? req.body.startDate : goal.startDate;
            goal.endDate = req.body.endDate ? req.body.endDate : goal.endDate;

          goal.save(function(err, goal){
            if(err){
              console.log(err);
              next();
            } else {
              res.json({message: "goal updated!"})
            }
          })
        }
    });
  })

  .delete(function(req, res, next){
      Goal.remove({_id: req.params.goal_id}, function(err, goal){
        if(err){
          console.log(err);
          next();
        } else {
          console.log(Goal);
          res.json({message: "goal deleted!"})
        }
      });
  })

  module.exports = router;