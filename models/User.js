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
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
},
    {
        toJSON: { //telling this schema to use virtuals
            virtuals: true,
            getters: true //need this to fix the date
        },
        id: false
    });


userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})




const User = model('User', userSchema);
module.exports = User;