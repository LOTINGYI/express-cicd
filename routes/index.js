var express = require('express');
var router = express.Router();
var User = require('../models/userModel')
/* GET home page. */
router.get('/', async function (req, res, next) {
  const user = await User.find()
  res.render('index', { user });
});

module.exports = router;
