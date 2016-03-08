
require('dotenv').config();
var http = require('http');
var express = require('express');
var api = require('instagram-node').instagram();
var router = express.Router();

api.use({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

var redirect_uri = 'http://localhost:8000/handleauth';

authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.redirect('/');
    }
  });
};
router.route('/test')
	.get(function(req, res){
		api.user('user_id', function(err, result, remaining, limit) {
			console.log(res)
		});

	})
// This is where you would initially send users to authorize
router.get('/authorize_user', authorize_user);//create button that takes user to this page
// This is your redirect URI
router.get('/handleauth', handleauth);

module.exports = router;


