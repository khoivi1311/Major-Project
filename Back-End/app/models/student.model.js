const db = require('../databases/connectDB');

const Student = function (student) {
    this.Student_id = student.Student_id;
    this.FullName = student.FullName;
    this.Email = student.Email;
    this.PhoneNumber = student.PhoneNumber;
    this.Password = student.Password;
}

//Get
Student.getStudent = function (result) {
    db.query("SELECT * FROM Students ", function (err, student) {
        if (err) {
            result(err);
        }
        else {
            result(student);
        }
    });
}

//Get Password
Student.getPwdStudent = function (email, result) {
    db.query("SELECT Password FROM Students WHERE Email = ?", email, function (err, student) {
        if (err) {
            result(err);
        }
        else {
            result(student);
        }
    });
}

//Get FullName and Author ID
Student.getInformationStudent = function (email, result) {
    db.query("SELECT Student_id, FullName FROM Students WHERE Email = ?", email, function (err, student) {
        if (err) {
            result(err);
        }
        else {
            result(student);
        }
    });
}

//Post
Student.postStudent = function (data, result) {
    db.query("INSERT INTO Students SET ?", data, function (err, student) {
        if (err) {
            result(null);
        }
        else {
            result({ Student_id: student.insertStudent_id, ...data });
        }
    });
}

//Delete
Student.deleteStudent = function (id, result) {
    db.query("DELETE FROM Students WHERE Student_id = ?", id, function (err, student) {
        if (err) {
            result(err);
        }
        else {
            result('Delete Student has id: ' + id + ' successful')
        }
    });
}

module.exports = Student;