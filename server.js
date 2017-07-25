"use strict";

var mongoose = require('mongoose');
var session = require('express-session');
var express = require('express');
var smoothScroll = require('smoothscroll');

var app = express();


// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));


app.get('/', function(request, response) {
    response.send('Simple web server of files from ' + __dirname);
});

var server = app.listen((process.env.PORT || 5000), function() {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});

