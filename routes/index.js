var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/shop',function(req,res,next){
	res.render('shoping');
})

module.exports = router;
