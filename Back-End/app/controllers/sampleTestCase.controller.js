var SampleTestCase = require('../models/sampleTestCase.model');

//Get method
exports.getSampleTestCase = function (req, res) {
    SampleTestCase.getSampleTestCase(function (data) {
        res.send(data);
    });
}

//Get method
exports.getSampleTestCaseByQuestionID = function (req, res) {
    var id = req.params.id
    SampleTestCase.getSampleTestCaseByQuestionId(id, function (data) {
        res.send(data);
    });
}

//Post method
exports.postSampleTestCase = function (req, res) {
    var data = req.body;
    SampleTestCase.postSampleTestCase(data, function (response) {
        res.send([response]);
    });
}

//Delete method
exports.deleteSampleTestCase = function (req, res) {
    var id = req.params.id;
    SampleTestCase.deleteSampleTestCase(id, function (response) {
        res.send([response]);
    });
}