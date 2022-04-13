const Details = require('../models/details');
const Designs = require('../models/design');

module.exports = {

    index,
    new: newDetail,
    show,
    create,
    delete: deleteDetail,
};
function index(req, res) {
    Details.find({}, function (err, details) {
        res.render('details/index', { title: 'Details', details });
    });
};

function newDetail(req, res) {
    res.render('details/new', { title: 'Add a Detail' });
};
function show(req, res) {
    Details.findById(req.params.id, function (err, detail) {
        Designs.find({ detail: req.params.id }, function (err, design) {
            res.render('details/show', { title: 'Designs', detail, design });
        });
    });
};

function create(req, res) {
    req.body.user = req.user._id
    let details = new Details(req.body);
    details.save(function (err) {
        if (err) return res.render('details/new');
        res.redirect('/details');
    })
};

function deleteDetail(req, res) {
    Details.findByIdAndDelete(req.params.id, function (errr, deletedDetail) {
        res.redirect('/details');
    });
};

