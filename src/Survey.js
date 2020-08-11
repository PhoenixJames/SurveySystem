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
    username,
  } = req.body;
  let ret;
  // let ret = await Survey.findOne({ code: 1});
  if (web != null) {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        web: Boolean(web),
        webDate: new Date(webDate),
        webComment,
        username,
      },
      {new: true}
    )
  } else {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        web: null,
        webDate: null,
        webComment: null,
        username,
      },
      {new: true}
    )
  }
  if (web2 != null) {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        web2: Boolean(web2),
        webDate2: new Date(webDate2),
        webComment2,
        username,
      },
      {new: true}
    )
  } else {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        web2: null,
        webDate2: null,
        webComment2: null,
        username,
      },
      {new: true}
    )
  }
  if (ppi != null) {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        ppi: Boolean(ppi),
        ppiDate: new Date(ppiDate),
        ppiComment,
        username,
      },
      {new: true}
    )
  } else {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        ppi: null,
        ppiDate: null,
        ppiComment: null,
        username,
      },
      {new: true}
    )
  }
  if (app != null) {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        app: Boolean(app),
        appDate: new Date(appDate),
        appComment,
        username,
      },
      {new: true}
    )
  } else {
    ret = await Survey.findOneAndUpdate(
      {
        code: code,
      },
      {
        app: null,
        appDate: null,
        appComment: null,
        username,
      },
      {new: true}
    )
  }
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