const db = require('../databases/connectDB');

var AuthorHistoryPractice = function (authorHistoryPractice) {
    this.ID = authorHistoryPractice.ID;
    this.Question_id = authorHistoryPractice.Question_id;
    this.Question_description = authorHistoryPractice.Question_description;
    this.Author_id = authorHistoryPractice.Author_id;
    this.Pass = authorHistoryPractice.Pass;
    this.Testcase_fail = authorHistoryPractice.Testcase_fail;
    this.Source_code = authorHistoryPractice.Source_code;
    this.Languages = authorHistoryPractice.Languages;
    this.Submit_date = authorHistoryPractice.Submit_date;
}

//Get
AuthorHistoryPractice.getAuthorHistoryPractice = function (result) {
    db.query('SELECT * FROM AuthorHistoryPractices ORDER BY Submit_date DESC', function (err, authorHistoryPractice) {
        if (err) {
            result(err);
        }
        else {
            result(authorHistoryPractice);
        }
    });
}

//Get by Author ID
AuthorHistoryPractice.getAuthorHistoryPracticeByAuthorId = function (Id, result) {
    db.query('SELECT * FROM AuthorHistoryPractices WHERE Author_id = ? ORDER BY Submit_date DESC', Id, function (err, authorHistoryPractice) {
        if (err) {
            result(err);
        }
        else {
            result(authorHistoryPractice);
        }
    })
}

//Get by ID
AuthorHistoryPractice.getAuthorHistoryPracticeById = function (Id, result) {
    db.query('SELECT * FROM AuthorHistoryPractices WHERE ID = ? ORDER BY Submit_date DESC', Id, function (err, authorHistoryPractice) {
        if (err) {
            result(err);
        }
        else {
            result(authorHistoryPractice);
        }
    })
}



//Get with information user
AuthorHistoryPractice.getAuthorHistoryPracticeWithInformation = function (result) {
    db.query('SELECT ID, Question_id, Question_description, Pass, Testcase_fail, Source_code, Languages, Submit_date, a.Author_id, FullName, Email FROM AuthorHistoryPractices h JOIN Authors a ON h.Author_id = a.Author_id  ORDER BY Submit_date DESC', function (err, authorHistoryPractice) {
        if (err) {
            result(err);
        }
        else {
            result(authorHistoryPractice);
        }
    })
}

//Post
AuthorHistoryPractice.postAuthorHistoryPractice = function (data, result) {
    db.query('INSERT INTO AuthorHistoryPractices SET ?', data, function (err, authorHistoryPractice) {
        if (err) {
            result(null);
        }
        else {
            result({ ID: authorHistoryPractice.insertID, ...data });
        }
    });
}

module.exports = AuthorHistoryPractice;