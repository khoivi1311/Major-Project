var Question = require('../models/question.model');

//Get method
exports.getQuestion = function (req, res) {
    Question.getQuestion(function (data) {
        res.send(data);
    });
}

//Get method
exports.getLastIdQuestion = function (req, res) {
    Question.getLastIdQuestion(function (data) {
        res.send(data);
    });
}

//Post method
exports.postQuestion = function (req, res) {
    var data = req.body;
    Question.postQuestion(data, function (response) {
        res.send([response]);
    });
}

//Delete method
exports.deleteQuestion = function (req, res) {
    var id = req.params.id;
    Question.deleteQuestion(id, function (response) {
        res.send([response]);
    })
}