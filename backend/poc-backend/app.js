var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var uploadRouter = require('./routes/upload');

var app = express();

mongoose.connect("mongodb://localhost:27017/poc-bocal", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("once", () => {
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: "*"
}));

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/files', uploadRouter);

app.listen(3003);

module.exports = app;
