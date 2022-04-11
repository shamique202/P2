const mongoose = ('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    name: {
        type: String,
        enum: ['All Black', 'Decluttered', 'Glam', 'Japanese', 'Light & Airy'],
    },
    imageUrl: {
        type: String,
    },
    icornName: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Detail', detailSchema);



