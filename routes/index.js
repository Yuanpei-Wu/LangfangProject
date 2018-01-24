var express = require('express');
var router = express.Router();
var session=require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.route('/login').post( function (req, res) {
    var user=req.body.username;
    var password=req.body.password;
    if(user=='admin'&& password=='admin'){
        req.session.user='admin';
        res.send('success');

    }
    else{
        res.send('fail');
    }
});
router.get('/index', function (req,res) {
   if(req.session.user=='admin')
        res.render('index');
});
module.exports = router;
