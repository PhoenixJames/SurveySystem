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
  const ret = await User.findOne({username, password});
  if (ret != null) {
    return res.status(200).send(ret);
  } else {
    return res.status(200).send(ret);
  }
}

module.exports = {
  userLogin,
};