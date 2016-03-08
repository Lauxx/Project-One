var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');
var port = process.env.PORT || 8000;
var instaRouter = require('./routes/instagram');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res){
	res.render('index')
});




app.use('/', instaRouter);
app.listen(port);
console.log('winning on ' + port);

