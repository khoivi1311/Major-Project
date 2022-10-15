var HistoryPractice = require('../models/historyPractice.model');

//Get method
exports.getHistoryPractice = function (req, res) {
    HistoryPractice.getHistoryPractice(function (data) {
        res.send(data);
    });
}

//Get method
exports.getHistoryPracticeByStudentId = function (req, res) {
    var Id = req.params.Id;
    HistoryPractice.getHistoryPracticeByStudentId(Id, function (data) {
        res.send(data);
    });
}

//Get method
exports.getHistoryPracticeById = function (req, res) {
    var Id = req.params.Id;
    HistoryPractice.getHistoryPracticeById(Id, function (data) {
        res.send(data);
    });
}

//Get method
exports.getHistoryPracticeWithInformation = function (req, res) {
    HistoryPractice.getHistoryPracticeWithInformation(function (data) {
        res.send(data);
    });
}

//Post method
exports.postHistoryPractice = function (req, res) {
    var data = req.body;
    HistoryPractice.postHistoryPractice(data, function (response) {
        res.send([response]);
    })
}