var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        index: true,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = function(newUser, callback){
    newUser.save(callback);
}