var Author = require('../models/author.model');

//Get method
exports.getAuthor = function (req, res) {
    Author.getAuthor(function (data) {
        res.send(data);
    });
}

//Get method
exports.getPwdAuthor = function (req, res) {
    var email = req.params.email;
    Author.getPwdAuthor(email, function (data) {
        res.send(data);
    });
}

//Get method
exports.getInformationAuthor = function (req, res) {
    var email = req.params.email;
    Author.getInformationAuthor(email, function (data) {
        res.send(data);
    });
}

//Post method
exports.postAuthor = function (req, res) {
    var data = req.body;
    Author.postAuthor(data, function (response) {
        res.send([response]);
    });
}

//Delete method
exports.deleteAuthor = function (req, res) {
    var id = req.params.id;
    Author.deleteAuthor(id, function (response) {
        res.send([response]);
    });
}
