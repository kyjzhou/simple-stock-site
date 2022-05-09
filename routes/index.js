var express = require('express');
var router = express.Router();

/* Home page route */
router.get('/', function(req, res, next) {
  // res.sendFile('public/home.html', {root: __dirname});
  res.render('index', { title: 'Express' });
});

/* About page route */
router.get('/about', function(req, res, next) {
  res.send('About');
});

module.exports = router;
