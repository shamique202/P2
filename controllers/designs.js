const design = require('../models/design');
const Designs = require('../models/design');
const Details = require('../models/details');

module.exports = {
    new: newDesign,
    show,
    create,
    delete: deleteDesign,
    update,
    edit,

};

function newDesign(req, res) {
    Designs.findById(req.params.id, function (err, designs) {
        res.render('designs/new', { title: 'Add Design Concept', designs, id: req.params.id });
    })
}

function show(req, res) {
    Designs.findById(req.params.id, function (err, design) {
        Details.findById(design.detail, function (err, detail) {
            res.render('designs/show', { title: 'The details of home decor', design, detail });
        });
    });
};

function create(req, res) {
    let i = req.body.artists;
    let d = req.body.informations;
    // req.body.artists = i.split('\r\n');
    // req.body.informations = d.split('\r\n');
    req.body.details = req.params.id
    Designs.create(req.body, function (err) {
        res.redirect(`/details/${req.params.id}`);
    });
};

function deleteDesign(req, res) {
    Designs.findByIdAndDelete(req.params.id, function (err, deletedDesign) {
        res.redirect(`/details`);
    });
};
function update(req, res) {
    Designs.findByIdAndUpdate(
        { _id: req.params.id, userRecommending: req.user._id },
        // update object with updated properties
        req.body,
        // options object with new: true to make sure updated doc is returned
        { new: true },
        function (err, detail) {
            if (err || !detail) return res.redirect('/designs');
            res.redirect(`/designs/${req.params.id}`);
        }
    );
}
function edit(req, res) {
    Designs.findOne({ 'comments._id': req.params.id }, function (err, designs) {
        const comment = designs.comments.id(req.params.id);
        // Render the comments/edit.ejs template, passing to it the comment
        res.render('comments/edit', { comment });
    });
} 