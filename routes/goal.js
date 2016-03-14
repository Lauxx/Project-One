//this is for visionboard.ejs--userbio form

var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');
var Goal = require('../models/goal');

router.route('/visionboard')
  .get(function(req, res, next){

    Goal.find()
    .populate('author')
    .populate('comments')
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
    goal.author = req.user ? req.user._id : '56df6149fa9dff1e9be93c83';
    goal.posX = req.body.posX || 0;
    goal.posY = req.body.posY || 0;

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

router.route('/visionboard/goal/:user_id') //ask Doug
  .get(function(req, res, next){
      Goal.find(req.params.user_id)
      .populate('author')
      .populate('comments')
      .exec(function(err, goal){
        if (err){
          console.log(err);
          next();
        } else {
          res.json(goal)
        }
      });
    })

router.route('/visionboard/:goal_id')
  .get(function(req, res, next){
    Goal.findById(req.params.goal_id, function(err, goal){
      if (err){
        console.log(err)
        next();
      } else {
        res.json(goal)
      }
    });
  })
  .put(function(req, res, next){
      Goal.findById(req.params.goal_id, function(err, goal){
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

router.route('/visionboard/:goal_id/comment')
  .post(function(req, res){

      var comment = new Comment();

      comment.body = req.body.body ? req.body.body : comment.body;
      comment.user = '56df6149fa9dff1e9be93c83';
      comment.goal = req.params.goal_id;

      comment.save(function(err, comm){
        if(err) {
          res.send(err);
        } else {
          Goal.findById(req.params.goal_id, function(err, goal){
            if (err) {
              res.send(err);
            } else {
              goal.comments.push(comm._id);
              goal.save();
              res.json(comm);            
            }
          })
        }
      })
    })

  .get(function(req, res){
    Goal.findById(req.params.goal_id)
      .populate('author')
      .populate('comments')
      .exec(function(err, goal){
      if (err) {
        console.log(err);
      } else {
        res.json(goal);
      }
    })

  })

  .delete(function(req, res){
    Goal.remove({ _id: req.params.goal_id}, function(err, goal){
      if(err) {
        console.log(err);
      } else {
        res.json({message: 'comment deleted!'});
      }
    })
  });

  module.exports = router;













