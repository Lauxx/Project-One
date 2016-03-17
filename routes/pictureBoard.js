var express = require('express');
var router = express.Router();

var PictureBoard = require('../models/pictureBoard');

router.route('/pictureboard/:user_id')
	.get(function(req, res, next){
		PictureBoard.find(req.params.user_id, function(err, image){
			if (err){
				console.log(err);
				next();
			} else {
				res.json(image);
			}
		});
	})

	.post(function(req, res){
		var picture = new PictureBoard();

		picture.imageUrl = req.body.imageUrl || "none";
		picture.user = req.user ? req.user._id : '56df6149fa9dff1e9be93c83'
		console.log(picture);

		picture.save(function(err, image){
			if (err){
				console.log(err);
			} else {
				res.json(image)
			}
		});
	})

router.route('/pictureboard/:picture_id')
	.delete(function(req, res, next){
		PictureBoard.remove({_id: req.params.picture_id}, function(err, image){
			if (err){
				console.log(err)
				next();
			} else {
				res.json({message: 'image deleted'}); 
			}
		});
	})











module.exports = router;