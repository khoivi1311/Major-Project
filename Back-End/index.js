const express = require('express');
var cors = require('cors')
const app = express();

//Setup Port and Host
const PORT = 4000;
const HOST = "0.0.0.0";

//set CORS
app.use(cors());

//setup Body-Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup Router
var questionRouter = require('./app/routes/question.router');
app.use('/questions', questionRouter);

var sampleTestCaseRouter = require('./app/routes/sampleTestCase.router');
app.use('/sampletestcases', sampleTestCaseRouter);

var testCaseRouter = require('./app/routes/testCase.router');
app.use('/testcases', testCaseRouter);

var authorRouter = require('./app/routes/author.router');
app.use('/authors', authorRouter);

var studentRouter = require('./app/routes/student.router');
app.use('/students', studentRouter);

var HistoryPracticeRouter = require('./app/routes/historyPractice.router');
app.use('/historypractices', HistoryPracticeRouter);

var AuthorHistoryPracticeRouter = require('./app/routes/authorHistoryPractice.router');
app.use('/authorhistorypractices', AuthorHistoryPracticeRouter);

app.listen(PORT, HOST, function () {
    console.log('Running on Port 4000');
});