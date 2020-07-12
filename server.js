const express = require('express');
const bodyParser = require('body-parser');
const testLocRouter = require('./routes/testLocRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use('/testLocs', testLocRouter);


app.all('/testLocs', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/testLocs', (req, res) => {
    res.end('Will send all the test locations to you');
});

app.post('/testLocs', (req, res) => {
    res.end(`Will add the test location: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/testLocs', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /testLocs');
});

app.delete('/testLocs', (req, res) => {
    res.end('Deleting all test locations');
});

app.get('/testLocs/:testLocId', (req, res) => {
    res.end(`Will send details of the test locations: ${req.params.testLocid} to you`);
});

app.post('/testLocs/:testLocId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /testLocs/${req.params.testLocId}`);
});

app.put('/testLocs/:testLocId', (req, res) => {
    res.write(`Updating the test location: ${req.params.testLocId}\n`);
    res.end(`Will update the test location: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/testLocs/:testLocID', (req, res) => {
    res.end(`Deleting test location: ${req.params.testLocId}`);
});