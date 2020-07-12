const express = require('express');
const bodyParser = require('body-parser');

const testLocRouter = express.Router();

testLocRouter.use(bodyParser.json());

testLocRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the test locations to you');
})
.post((req, res) => {
    res.end(`Will add the test location: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /testLocs');
})
.delete((req, res) => {
    res.end('Deleting all test locations');
});

module.exports = testLocRouter;