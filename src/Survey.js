const debug = require('debug')('DEBUG');
const moment = require('moment');
const utils = require('./utils');
const {
  Survey
} = require('../database/schema');

const getAllSurvey = async function(req, res) {
  let ret = await Survey.find({});
  if (ret) {
    return res.status(200).send(ret);
  }
  return res.status(404).send('error');
}

const getAllFilledSurvey = async function(req, res) {
  let ret = await Survey.find({web: { $ne: null }});
  if (ret) {
    return res.status(200).send(ret);
  }
  return res.status(404).send('error');
}

const getSurveyByCode = async function(req, res) {
  const { code } = req.params;
  let ret = await Survey.findOne({code: parseInt(code, 10)});
  if (ret) {
    return res.status(200).json(ret);
  }
  return res.status(404).json('error');
}

const createSurvey = function(req, res) {
  const { 
    code,
    townshipName,
    villageTract,
    villageName,
    villageId,
    registrationDate,
    beneficiaryMmName,
    beneficiaryEngName,
  } = req.body;
  new Survey({
    code,
    townshipName,
    villageTract,
    villageName,
    villageId,
    registrationDate,
    beneficiaryMmName,
    beneficiaryEngName,
  }).save(function (err, data) {
    if(err) {
      return res.status(404).send(err);
    }
    return res.status(200).send('Survey create successful');
  })
}
const updateSurvey = async function(req, res) {
  const { 
    code,
    web,
    webDate,
    webComment,
    web2,
    webDate2,
    webComment2,
    ppi,
    ppiDate,
    ppiComment,
    app,
    appDate,
    appComment,
  } = req.body;
  // let ret = await Survey.findOne({ code: 1});
  let ret = await Survey.findOneAndUpdate(
    {
      code: code,
    },
    {
      web: Boolean(web),
      webDate: new Date(webDate),
      webComment,
      web2: Boolean(web2),
      webDate2: new Date(webDate2),
      webComment2,
      ppi: Boolean(ppi),
      ppiDate,
      ppiComment,
      app: Boolean(app),
      appDate,
      appComment,
    },
    {new: true}
  )
  if(ret) {
    return res.status(200).send(ret);
  }
  return res.status(404).send('error');
}

module.exports = {
  getAllSurvey,
  createSurvey,
  updateSurvey,
  getSurveyByCode,
  getAllFilledSurvey,
};