var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoalSchema = new Schema ({
    intention: String,
    taskList: String,
    startDate: String,
    endDate: String,

});

module.exports = mongoose.model ('Goal', GoalSchema);