var express = require('express');
var router = express.Router();

/* GET pdf site. */
router.get('/', function(req, res, next) {
  res.render('pdf', { title: 'PDF' });
});


/* Create pdf . */
router.post('/', function(req, res, next) {
  console.log('Creating pdf...');
});


module.exports = router;
