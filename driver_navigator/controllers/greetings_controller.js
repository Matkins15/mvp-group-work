var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
  res.render('greetings.hbs', {
    dude: req.params.name
  });
});



module.exports = router;
