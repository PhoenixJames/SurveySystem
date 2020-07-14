const {
  userLogin,
} = require('../src/User');
const express = require('express');
var router = express.Router();

router.post('/login', userLogin);

module.exports = router;