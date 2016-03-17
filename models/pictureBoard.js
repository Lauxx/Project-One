var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PictureBoardSchema = new Schema({
  imageUrl: Array,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model ('PictureBoard', PictureBoardSchema);