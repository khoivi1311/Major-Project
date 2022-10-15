const db = require('../databases/connectDB');

const TestCase = function (testCase) {
    this.ID = testCase.ID;
    this.Question_id = testCase.Question_id;
    this.Input = testCase.Input;
    this.Output = testCase.Output;
}

//Get
TestCase.getTestCase = function (result) {
    db.query('SELECT * FROM Testcases', function (err, testcase) {
        if (err) {
            result(err);
        }
        else {
            result(testcase);
        }
    });
}

//Get by question id
TestCase.getTestCaseByQuestionId = function (id, result) {
    db.query('SELECT * FROM Testcases WHERE Question_id = ?', id, function (err, testcase) {
        if (err) {
            result(err);
        }
        else {
            result(testcase);
        }
    });
}

//Post
TestCase.postTestCase = function (data, result) {
    db.query('INSERT INTO Testcases SET ?', data, function (err, testcase) {
        if (err) {
            result(null);
        }
        else {
            result({ ID: testcase.insertID, ...data });
        }
    });
}

//Delete
TestCase.deleteTestCase = function (id, result) {
    db.query('DELETE FROM Testcases WHERE ID = ?', id, function (err) {
        if (err) {
            result(err);
        }
        else {
            result('Delete testcase has id: ' + id + ' successful');
        }
    });
}

module.exports = TestCase;