const Designs = require('../models/design');

module.exports = {
    edit,
    create,
    delete: deleteLikes,
    update,
};

function edit(req, res) {
    Designs.findOne({ 'likes._id': req.params.id }, function (err, design) {
        res.render('likes/edit', { title: 'Edit comment here', design, like: req.params.id });
    });
};

function create(req, res) {
    Designs.findById(req.params.id, function (err, design) {
        // add user's info 
        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        design.likes.push(req.body);
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`);
        });
    });
};




