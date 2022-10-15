var AuthorHistoryPractice = require('../models/authorHistoryPractice.model');

//Get method
exports.getAuthorHistoryPractice = function (req, res) {
    AuthorHistoryPractice.getAuthorHistoryPractice(function (data) {
        res.send(data);
    });
}

//Get method
exports.getAuthorHistoryPracticeByAuthorId = function (req, res) {
    var Id = req.params.Id;
    AuthorHistoryPractice.getAuthorHistoryPracticeByAuthorId(Id, function (data) {
        res.send(data);
    });
}

//Get method
exports.getAuthorHistoryPracticeById = function (req, res) {
    var Id = req.params.Id;
    AuthorHistoryPractice.getAuthorHistoryPracticeById(Id, function (data) {
        res.send(data);
    });
}

//Get method
exports.getAuthorHistoryPracticeWithInformation = function (req, res) {
    AuthorHistoryPractice.getAuthorHistoryPracticeWithInformation(function (data) {
        res.send(data);
    });
}

//Post method
exports.postAuthorHistoryPractice = function (req, res) {
    var data = req.body;
    AuthorHistoryPractice.postAuthorHistoryPractice(data, function (response) {
        res.send([response]);
    })
}