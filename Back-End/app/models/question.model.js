const db = require('../databases/connectDB');

const Question = function (question) {
    this.Question_id = question.Question_id;
    this.Title = question.Title;
    this.Description = question.Description;
    this.CreateDate = question.CreateDate;
    this.Topic = question.Topic;
    this.Level = question.Level;
    this.Author_id = question.Author_id;
}

//Get
Question.getQuestion = function (result) {
    db.query('SELECT * FROM Questions ORDER BY CreateDate DESC', function (err, question) {
        if (err) {
            result(err);
        }
        else {
            result(question);
        }
    });
}

//Get Last Id Question
Question.getLastIdQuestion = function (result) {
    db.query('SELECT Question_id FROM Questions ORDER BY Question_id DESC LIMIT 1', function (err, question) {
        if (err) {
            result(err);
        }
        else {
            result(question);
        }
    });
}

//Post
Question.postQuestion = function (data, result) {
    db.query('INSERT INTO Questions SET ?', data, function (err, question) {
        if (err) {
            result(null);
        }
        else {
            result({ Question_id: question.insertQuestion_id, ...data });
        }
    });
}

//Delete
Question.deleteQuestion = function (id, result) {
    db.query('DELETE FROM Questions WHERE Question_id = ?', id, function (err) {
        if (err) {
            result(err);
        }
        else {
            result('Delete question has id: ' + id + ' successful');
        }
    });
}

module.exports = Question;