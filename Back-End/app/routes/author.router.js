var express = require('express');
var router = express.Router();

var authorController = require('../controllers/author.controller');

router.get('/getlist', authorController.getAuthor);
router.get('/getpassword/:email', authorController.getPwdAuthor);
router.get('/getinformation/:email', authorController.getInformationAuthor);
router.post('/add', authorController.postAuthor);
router.delete('/remove/:id', authorController.deleteAuthor);

module.exports = router;