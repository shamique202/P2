const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    like: {
        type: Number,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: {
        type: String,
    },
}, {
    timestamps: true
});

const designShcema = new Schema({
    title: {
        type: String,
    },
    designImageUrl: {
        type: String,
    },
    detail: {
        type: Schema.Types.ObjectId,
        ref: 'Detail',
    },
    note: {
        type: String,
    },
    artists: {
        type: [String],
    },
    informations: {
        type: [String],
    },
    likes: [likeSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Design', designShcema);