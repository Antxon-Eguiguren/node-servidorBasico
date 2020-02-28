var express = require('express');
var router = express.Router();

/* GET home page. */
// GET http://localhost:3000
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
