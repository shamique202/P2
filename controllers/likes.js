const Designs = require('../models/design');

module.exports = {
    edit,
    create,
    delete: deleteLikes,
    update,
};

function edit(req, res) {
    Designs.findOne({ 'likes._id': req.params.id }, function (err, design) {
        res.render('likes/edit', { title: 'Edit your comment here', design, like: req.params.id });
    });
};


function create(req, res) {
    Designs.findById(req.params.id, function (err, design) {
        // add the user's info 
        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        design.likes.push(req.body);
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`);
        });
    });
};

function deleteLikes(req, res) {
    Designs.findOne({ 'likes._id': req.params.id }, function (err, design) {
        const like = design.likes.id(req.params.id);
        if (!like.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
        like.remove();
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`);
        });
    });
};

function update(req, res) {
    console.log(req.body)
    Designs.findOne({ 'likes._id': req.params.id }, function (err, design) {
        const like = design.likes.id(req.params.id);
        console.log(like);
        if (!like.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
        like.comment = req.body.comment;
        design.save(function (err) {
            res.redirect(`/designs/${design._id}`)
        })
    })
}







