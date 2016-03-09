var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserBioSchema = new Schema ({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    biocontent: String,
    bioimage: String
});

module.exports = mongoose.model ('UserBio', UserBioSchema);