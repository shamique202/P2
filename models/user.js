const mongoose = require('mongoose');

// Create your User Model
const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    admin: {
        type: Boolean,
        default: false,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);