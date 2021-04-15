const { Schema, model } = require('mongoose'); //importing dependencies

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter a username',
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Please enter an email',
        match: [/.+\@.+\..+/, 'Email must be a valid one.']
    },
  //  thoughts: [Thought],
  //  friends: [User] ///or userSchema,

})

const User = model('User', userSchema);
module.exports = User;