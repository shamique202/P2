const Details = require('../models/details');
const Designs = require('../models/design');

module.exports = {

    index,
    new: newDetail,
    show,
    create,
    delete: deleteDetail,
    edit,
    update,
    post,
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
    Details.create(req.body, function (err, details) {
        if (err) return res.render(`details/${details_.id}`, { details, title: " Create" });
        res.redirect('details/new');
    })
    // req.body.user = req.user._id
    // let details = new Details(req.body);
    // details.save(function (err) {
    //     if (err) return res.render('details');
    //     res.redirect('/details');
};

function deleteDetail(req, res) {
    Details.findByIdAndDelete(req.params.id, function (errr, deletedDetail) {
        res.redirect('/details');
    });
};

function edit(req, res) {
    Details.findOne({ _id: req.params.id }, function (err, detail) {
        if (err) return res.redirect('/details');
        res.render('details/edit', { detail, title: detail.name });
    });
}

function update(req, res) {
    Details.findByIdAndUpdate(
        { _id: req.params.id, userRecommending: req.user._id },
        req.body,
        { new: true },
        function (err, detail) {
            console.log(err)
            if (err || !detail) return res.redirect(`/details/${req.params.id}/edit`);
            res.redirect(`/details`);
        }
    );
}
function post() { }