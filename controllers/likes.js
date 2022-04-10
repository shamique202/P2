const Designs = require('../models/design');

module.exports = {
    edit,
    create,
    delete: deleteLikes,
    update,
};

function edit(req, res) {
    Designs.findOne({ 'likes._id': req.params.id }, function (err, design) {
        res.render('likes/edit', { title: 'Edit Your Comment', design, like: req.params.id });
    });
};

