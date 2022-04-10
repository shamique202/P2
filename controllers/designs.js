const designs = require('../models/design');
const details = require('../models/details');

module.exports = {
    new: newDesign,
    show,
    create,
    delete: deleteDesign,
};

