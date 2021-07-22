class HomeController {
    index(req, res) {
        return res.render('index/index');
    }
}

module.exports = new HomeController;