var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/fmsDB');
var db = mongoose.connection;

var public = require('./routes/public');
app.use('/public', public);

module.exports = app;