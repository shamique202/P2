module.exports = {

    index,

}

function index(req, res) {
    res.render('abouts/index', { title: 'About Me' })
};