const db = require('../databases/connectDB');

var HistoryPractice = function (historyPractice) {
    this.ID = historyPractice.ID;
    this.Question_id = historyPractice.Question_id;
    this.Question_description = historyPractice.Question_description;
    this.Student_id = historyPractice.Student_id;
    this.Pass = historyPractice.Pass;
    this.Testcase_fail = historyPractice.Testcase_fail;
    this.Source_code = historyPractice.Source_code;
    this.Languages = historyPractice.Languages;
    this.Submit_date = historyPractice.Submit_date;
}

//Get
HistoryPractice.getHistoryPractice = function (result) {
    db.query('SELECT * FROM HistoryPractices ORDER BY Submit_date DESC', function (err, historyPractice) {
        if (err) {
            result(err);
        }
        else {
            result(historyPractice);
        }
    });
}

//Get by Student ID
HistoryPractice.getHistoryPracticeByStudentId = function (Id, result) {
    db.query('SELECT * FROM HistoryPractices WHERE Student_id = ? ORDER BY Submit_date DESC', Id, function (err, historyPractice) {
        if (err) {
            result(err);
        }
        else {
            result(historyPractice);
        }
    })
}

//Get by ID
HistoryPractice.getHistoryPracticeById = function (Id, result) {
    db.query('SELECT * FROM HistoryPractices WHERE ID = ? ORDER BY Submit_date DESC', Id, function (err, historyPractice) {
        if (err) {
            result(err);
        }
        else {
            result(historyPractice);
        }
    })
}

//Get with information user
HistoryPractice.getHistoryPracticeWithInformation = function (result) {
    db.query('SELECT ID, Question_id, Question_description, Pass, Testcase_fail, Source_code, Languages, Submit_date, s.Student_id, FullName, Email FROM HistoryPractices h JOIN Students s ON h.Student_id = s.Student_id  ORDER BY Submit_date DESC', function (err, historyPractice) {
        if (err) {
            result(err);
        }
        else {
            result(historyPractice);
        }
    })
}

//Post
HistoryPractice.postHistoryPractice = function (data, result) {
    db.query('INSERT INTO HistoryPractices SET ?', data, function (err, historyPractice) {
        if (err) {
            result(null);
        }
        else {
            result({ ID: historyPractice.insertID, ...data });
        }
    });
}

module.exports = HistoryPractice;