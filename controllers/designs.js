const designs = require('../models/designs');
const details = require('../models/details');

module.exports = {
    new: newDesign,
    show,
    create,
    delete: deleteDesign,
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
    req.body.artists = i.split('\r\n');
    req.body.informations = d.split('\r\n');
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