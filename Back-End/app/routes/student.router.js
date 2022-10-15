var express = require('express');
var router = express.Router();

var studentController = require('../controllers/student.controller');

router.get('/getlist', studentController.getStudent);
router.get('/getpassword/:email', studentController.getPwdStudent);
router.get('/getinformation/:email', studentController.getInformationStudent);
router.post('/add', studentController.postStudent);
router.delete('/remove/:id', studentController.deleteStudent);

module.exports = router;