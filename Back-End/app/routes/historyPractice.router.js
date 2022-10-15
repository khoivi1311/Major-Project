var express = require('express');
var router = express.Router();

var historyPracticeController = require('../controllers/historyPractice.controller');

router.get('/getlist', historyPracticeController.getHistoryPractice);
router.get('/gethistorypractice/:Id', historyPracticeController.getHistoryPracticeByStudentId);
router.get('/gethistorypracticebyid/:Id', historyPracticeController.getHistoryPracticeById);
router.get('/gethistorypracticebyinformation', historyPracticeController.getHistoryPracticeWithInformation);
router.post('/add', historyPracticeController.postHistoryPractice);

module.exports = router;