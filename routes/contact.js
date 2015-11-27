var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET vCard page. */
router.get('/vcard', function(req, res, next) {
  // res.download('assets/SamuelHess.vcf', 'SamuelHess.vcf');
  var vCard = require('vcards-js');

  //create a new vCard
  vCard = vCard();
  vCard.version = '3.0';

  //set properties
  vCard.firstName = 'Samuel';
  vCard.lastName = 'Hess';
  // vCard.organization = 'IoT & Web Agency Hess';

  vCard.photo.embedFromFile('assets/images/samhess.jpg');
  // vCard.title = 'IoT Consultant';
  vCard.title = 'Dipl. Ing. FH, B.A. HSG';
  // vCard.workPhone = '+41789498855';
  vCard.cellPhone = '+41 78 949 88 55';
  vCard.email = 'mail@samhess.ch';
  vCard.url = 'www.samhess.ch';

  vCard.homeAddress.street = 'Oberer Graben 26';
  vCard.homeAddress.city = 'Winterthur';
  // vCard.homeAddress.stateProvince = 'ZH';
  vCard.homeAddress.postalCode = '8400';
  vCard.homeAddress.countryRegion = 'Switzerland';

  vCard.socialUrls['facebook'] = 'https://www.facebook.com/samhess.ch';
  vCard.source = 'http://www.samhess.ch/contact/vcard';

  //set content-type and disposition including desired filename
  res.set('Content-Type', 'text/vcard; name="samhess.vcf"');
  res.set('Content-Disposition', 'inline; filename="samhess.vcf"');

//send the response
  res.send(vCard.getFormattedString());
});

module.exports = router;
