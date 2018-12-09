var express = require('express');
var router = express.Router();

const fs = require('fs');
const PdfPrinter = require('pdfmake');

const fonts = {
	Roboto: {
		normal: 'routes/fonts/Roboto-Regular.ttf',
		bold: 'routes/fonts/Roboto-Medium.ttf',
		italics: 'routes/fonts/Roboto-Italic.ttf',
		bolditalics: 'routes/fonts/Roboto-Italic.ttf',
	},
};


/* GET pdf site. */
router.get('/', function(req, res, next) {
  res.render('pdf', { title: 'PDF' });
});


// /* Create pdf . */
// router.post('/', function(req, res, next) {
//   console.log('Creating pdf...');


//   var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

//    // open the PDF in a new window
//    pdfMake.createPdf(docDefinition).open();
  
//   //  // print the PDF
//   //  pdfMake.createPdf(docDefinition).print();
  
//   //  // download the PDF
//   //  pdfMake.createPdf(docDefinition).download('optionalName.pdf');


// });


module.exports = router;
