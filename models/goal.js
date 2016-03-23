var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoalSchema = new Schema ({
	goalTitle: String,
    intention: String,
    taskList: Array,
    startDate: String,
    endDate: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    posX: Number,
    posY: Number
});

module.exports = mongoose.model ('Goal', GoalSchema);