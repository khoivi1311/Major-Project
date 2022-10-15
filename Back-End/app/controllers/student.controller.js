var Student = require('../models/student.model');

//Get method
exports.getStudent = function (req, res) {
    Student.getStudent(function (data) {
        res.send(data);
    });
}

//Get method
exports.getPwdStudent = function (req, res) {
    var email = req.params.email;
    Student.getPwdStudent(email, function (data) {
        res.send(data);
    });
}

//Get method
exports.getInformationStudent = function (req, res) {
    var email = req.params.email;
    Student.getInformationStudent(email, function (data) {
        res.send(data);
    });
}

//Post method
exports.postStudent = function (req, res) {
    var data = req.body;
    Student.postStudent(data, function (response) {
        res.send([response]);
    });
}

//Delete method
exports.deleteStudent = function (req, res) {
    var id = req.params.id;
    Student.deleteStudent(id, function (response) {
        res.send([response]);
    });
}