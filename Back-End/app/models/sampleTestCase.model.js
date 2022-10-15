const db = require('../databases/connectDB');

const SampleTestCase = function (sampleTestCase) {
    this.ID = sampleTestCase.ID;
    this.Question_id = sampleTestCase.Question_id;
    this.Input = sampleTestCase.Input;
    this.Output = sampleTestCase.Output;
}

//Get
SampleTestCase.getSampleTestCase = function (result) {
    db.query('SELECT * FROM SampleTestcases', function (err, sampletestcase) {
        if (err) {
            result(err);
        }
        else {
            result(sampletestcase);
        }
    });
}

//Get by question id
SampleTestCase.getSampleTestCaseByQuestionId = function (id, result) {
    db.query('SELECT * FROM SampleTestcases WHERE Question_id = ?', id, function (err, sampletestcase) {
        if (err) {
            result(err);
        }
        else {
            result(sampletestcase);
        }
    });
}

//Post
SampleTestCase.postSampleTestCase = function (data, result) {
    db.query('INSERT INTO SampleTestcases SET ?', data, function (err, sampletestcase) {
        if (err) {
            result(null);
        }
        else {
            result({ ID: sampletestcase.insertID, ...data });
        }
    });
}

//Delete
SampleTestCase.deleteSampleTestCase = function (id, result) {
    db.query('DELETE FROM SampleTestcases WHERE ID = ?', id, function (err) {
        if (err) {
            result(err);
        }
        else {
            result('Delete testcase has id: ' + id + ' successful');
        }
    });
}

module.exports = SampleTestCase;