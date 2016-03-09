var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');
var port = process.env.PORT || 8000;
var instaRouter = require('./routes/instagram');

var UserBio = require('./models/userbio');
var userBioRouter = require('./routes/userbio');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
cookie: {
  maxAge: 60000
}
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

app.use(function(req, res, next){
    var user = req.user || 'no user';
    console.log(user);
    next();
});

app.get('/', function(req, res){
  var user = req.user || "no user";
  res.render('index', {user: user})
});

app.get('/', function (req, res){
	res.render('index')
});


app.use('/', instaRouter);
app.use('/api', userBioRouter);

app.listen(port);
console.log('winning on ' + port);

