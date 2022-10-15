var express = require('express');
var router = express.Router();

var testCaseController = require('../controllers/testCase.controller');

router.get('/getlist', testCaseController.getTestCase);
router.get('/getlistbyquestionid/:id', testCaseController.getTestCaseByQuestionId);
router.post('/add', testCaseController.postTestCase);
router.delete('/remove/:id', testCaseController.deleteTestCase);

module.exports = router;