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
	.delete(function(req, res, next){
		PictureBoard.findOne({ user: req.params.user_id }, function(err, image){
			if (err){
				console.log(err);
				next();
			} else {
				image.remove();
				res.json({message: 'this record is gone'});
			}
		});
	})


	.put(function (req, res, next){
		PictureBoard.findOne({ user: req.params.user_id }, function(err, image){
			if(err){
				console.log(err);
				next();
			} else {
				image.imageUrl = req.body.imageUrl ? req.body.imageUrl : image.imageUrl;
				// var t = image.imageUrl.map(e => (JSON.parse(e)))[0];
				image.save(function(err, image){
					if (err){
						console.log(err);
						next();
					} else {
						// res.redirect('/visionboard');
						res.json ({message: "image updated!"})
					}
				})
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


module.exports = router;


