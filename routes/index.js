var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/home'], function(req, res, next) {
  res.render('index', { title: 'Home', path: req.path });
});
router.get('/cv', function(req, res, next) {
  res.render('cv', { title: 'CV', path: req.path });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog', path: req.path });
});
router.get('/quotes', function(req, res, next) {
  res.render('quotes', { title: 'Quotes', path: req.path });
});
router.get('/links', function(req, res, next) {
  res.render('links', { title: 'Links', path: req.path });
});

module.exports = router;
