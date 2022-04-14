const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    name: {
        type: String,
        enum: ['All Black', 'Decluttered', 'Glam', 'Japandi', 'Light & Airy'],
    },

    imageUrl: {
        type: String,
    },
    iconName: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Detail', detailSchema);



