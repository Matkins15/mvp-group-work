var express = require('express');
var app = express();
var hbs = require('hbs');
app.set("view engine", "hbs");

var mathController = require(__dirname + '/controllers/math_controller.js');
app.use('/math', mathController);

var greetingsController = require(__dirname + '/controllers/greetings_controller.js');
app.use('/greeting', greetingsController);

var reverseController = require(__dirname + '/controllers/reverse_controller.js');
app.use('/reverse', reverseController);

var dateController = require(__dirname + '/controllers/date_controller.js');
app.use('/date', dateController);

app.listen(3000);
