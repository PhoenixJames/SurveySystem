const debug = require('debug')('DEBUG');
const moment = require('moment');
const utils = require('./utils');
const {
  User
} = require('../database/schema');

const userLogin = async function(req, res) {
  const { 
    username,
    password,
  } = req.body;
  const ret = await User.find({username, password});
  if (ret.length > 0) {
    return res.status(200).send(true);
  } else {
    return res.status(200).send(false);
  }
}

module.exports = {
  userLogin,
};