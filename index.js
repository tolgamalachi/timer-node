var moment = require('moment');
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.status(200).send("" + moment().valueOf());
});

app.listen(3000, function () {
    console.log('gettime-app listening on port 3000!');
});