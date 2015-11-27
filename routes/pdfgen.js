var express = require('express');
var router = express.Router();

/* GET PDF of page. */
router.get('/', function(req, res, next) {
  phantom = require('phantom');
  phantom.create(function(ph){
    ph.createPage(function(page) {
      page.set('paperSize', {format: 'A4', margin: '0cm'}, function() {
        page.open("http://localhost:3000/cv", function(status) {
          page.render('assets/cv.pdf', function(){
            console.log('Page Rendered');
            res.download('assets/cv.pdf', 'CvSamuelHess.pdf');
            ph.exit();
          });
        });
      });
    });
  });
});

module.exports = router;
