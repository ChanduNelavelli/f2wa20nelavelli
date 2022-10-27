var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var val1="Math.fround(x)  applied to "+ x + " is "+ Math.fround(x)
var val1="Math.random(x) applied to "+ x + " is "+ Math.random(x)
var val3= "Math.round(x)  applied to "+ x + " is "+ Math.round(x);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('computation', { title:'Chandu Nelavelli',value1: val1, value2: val2, value3: val3 });

});

module.exports = router;