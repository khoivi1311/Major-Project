const db = require('../databases/connectDB');

const Author = function (author) {
    this.Author_id = author.Author_id;
    this.FullName = author.FullName;
    this.Email = author.Email;
    this.PhoneNumber = author.PhoneNumber;
    this.Password = author.Password;
    this.Total_question = author.Total_question;
}

//Get
Author.getAuthor = function (result) {
    db.query('SELECT * FROM Authors', function (err, author) {
        if (err) {
            result(err);
        }
        else {
            result(author);
        }
    });
}

//Get Password
Author.getPwdAuthor = function (email, result) {
    db.query("SELECT Password FROM Authors WHERE Email = ?", email, function (err, author) {
        if (err) {
            result(err);
        }
        else {
            result(author);
        }
    });
}

//Get FullName and Author ID
Author.getInformationAuthor = function (email, result) {
    db.query("SELECT Author_id, FullName FROM Authors WHERE Email = ?", email, function (err, author) {
        if (err) {
            result(err);
        }
        else {
            result(author);
        }
    });
}

//Post
Author.postAuthor = function (data, result) {
    db.query('INSERT INTO Authors SET ?', data, function (err, author) {
        if (err) {
            result(null);
        }
        else {
            result({ Author_id: author.insertAuthor_id, ...data });
        }
    });
}

//Delete
Author.deleteAuthor = function (id, result) {
    db.query('DELETE FROM Authors WHERE Author_id = ?', id, function (err, author) {
        if (err) {
            result(err);
        }
        else {
            result('Delete author has id: ' + id + ' successful');
        }
    });
}

module.exports = Author;