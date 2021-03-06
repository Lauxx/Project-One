var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
    body: String,
    date: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    goal: {type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}  
});


module.exports = mongoose.model ('Comment', CommentSchema);