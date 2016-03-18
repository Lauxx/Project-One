var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

var mongoose = require('mongoose');

var uriUtil = require('mongodb-uri');

var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGOLAB_URI || "mongodb://localhost/practice";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);


var port = process.env.PORT || 8000;
var PictureBoard = require('./models/pictureBoard');
var pictureBoardRouter = require('./routes/pictureBoard');

var Goal = require('./models/goal');
var goalRouter = require('./routes/goal');

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}


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

app.get('/pictureCollection', function (req, res){
  res.render('pictureCollection')
});

app.get('/visionboard', function(req, res){
  var user = req.user || "no user";
  res.render('visionboard', {user: user})
});


app.use('/api', goalRouter);
app.use('/api', pictureBoardRouter);
app.listen(port);
console.log('winning on ' + port);

