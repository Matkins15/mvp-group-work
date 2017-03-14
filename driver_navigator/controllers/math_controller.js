var express = require('express');
var router = express.Router();

function add(num1, num2){
  return (num1 + num2);
};
function subtract(num1, num2){
  return (num1 - num2);
};
function multiply(num1, num2){
  return (num1 * num2);
};
function divide(num1, num2){
  return (num1 / num2);
};

function range(num1, num2) {
  var rangeArray = [];
  for (var i = num1; i <= num2; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}


router.get('/:operator', function(req, res){
  var num1 = parseInt(req.query.num1);
  var num2 = parseInt(req.query.num2);
  var result = 0;

  switch (req.params.operator) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      var result = subtract(num1, num2);
      break;
    case 'multiply':
      var result = multiply(num1, num2);
      break;
    case 'divide':
      var result = divide(num1, num2);
      break;
    case 'range':
      result = range(num1, num2);
      break;
    default:
      var result = 'blah';
  }

  console.log(req.params.operator);
  console.log(result);
  res.render('math.hbs', {
    firstNumber: num1,
    secondNumber: num2,
    operator: req.params.operator,
    answer: result,
  });
});







module.exports = router;
