var express = require('express');
var router = express.Router();

router.get('/today', function(req, res) {
  var today = new Date();
  var result = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  res.render('today.hbs', {
      currentDate: result
  });
});





module.exports = router;
