var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('view options', { pretty: true });
app.locals.pretty = true; // render pretty HTML
app.locals.navLinks = [
  { label: 'Home',		key: 'home',		href: '/' },
  { label: 'Quotes',		key: 'quotes',		href: '/quotes' },
  /*{ label: 'Blog',		key: 'blog',		href: '/blog' },*/
  { label: 'CV',		key: 'cv',		href: '/cv' },
  { label: 'Contact',		key: 'contact',		href: '/contact' }
];
// console.log(app.locals);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'assets/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));
// configure routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));
app.use('/users', require('./routes/users'));
app.use('/pdfgen', require('./routes/pdfgen'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
