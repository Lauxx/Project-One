var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoalSchema = new Schema ({
    intention: String,
    taskList: String,
    startDate: String,
    endDate: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model ('Goal', GoalSchema);