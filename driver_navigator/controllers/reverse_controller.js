var express = require('express');
var router = express.Router();

router.get('/:word', function(req, res) {
  var word = req.params.word;
  var result = '';
  for(var i = word.length - 1; i >= 0; i--) {
    result += word.charAt(i);
  }
  res.render('reversed.hbs', {
    reversedWord: result
  });
});








module.exports = router;
