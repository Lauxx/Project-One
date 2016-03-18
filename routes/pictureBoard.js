var express = require('express');
var router = express.Router();

var PictureBoard = require('../models/pictureBoard');

router.route('/pictureboard/:user_id')
	.get(function(req, res, next){
		PictureBoard.findOne({ user: req.params.user_id }, function(err, image){
			if (err){
				console.log(err);
				next();
			} else {
				res.json(image);
			}
		});
	})


router.route('/pictureboard')
	.post(function(req, res){

		var picture = new PictureBoard();

		picture.imageUrl = req.body.imageUrl || "none";
		picture.user = req.user ? req.user._id : '56e6f2c74dc12465b9bbdf27'
		console.log(picture);

		picture.save(function(err, image){
			if (err){
				console.log(err);
			} else {
				// res.json(image);
				res.redirect('/visionboard');
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

	.put(function (req, res, next){
		PictureBoard.findById(req.params.picture_id, function(err, picture){
			if(err){
				console.log(err);
				next();
			} else {
				picture.imageUrl = req.body.imageUrl ? req.body.imageUrl : picture.imageUrl;

				picture.save(function(err, image){
					if (err){
						console.log(err);
						next();
					} else {
						res.json ({message: "image updated!"})
					}
				})
			}
		});
	})

module.exports = router;


