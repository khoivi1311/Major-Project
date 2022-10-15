var TestCase = require('../models/testCase.model');

//Get method
exports.getTestCase = function (req, res) {
    TestCase.getTestCase(function (data) {
        res.send(data);
    });
}

//Get method
exports.getTestCaseByQuestionId = function (req, res) {
    var id = req.params.id;
    TestCase.getTestCaseByQuestionId(id, function (data) {
        res.send(data);
    });
}

//Post method
exports.postTestCase = function (req, res) {
    var data = req.body;
    TestCase.postTestCase(data, function (response) {
        res.send([response]);
    });
}

//Delete method
exports.deleteTestCase = function (req, res) {
    var id = req.params.id;
    TestCase.deleteTestCase(id, function (response) {
        res.send([response]);
    });
}