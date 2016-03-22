var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local :{
    email: String,
    password: String,
    username: {type: String, unique: true},
    role: String,
    loggedIn: Boolean,
    bio: String,
    profileImage: String,
    pictureBoard: [{type: mongoose.Schema.Types.ObjectId, ref: 'PictureBoard'}],
    goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}],
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);