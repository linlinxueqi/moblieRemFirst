var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/shop',function(req,res,next){
	res.render('shoping');
});
router.get('/search',function(req,res,next){
	res.render('search');
});
router.get('/user',function(req,res,next){
	res.render('user');
})

module.exports = router;
