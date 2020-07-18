const {
  getAllSurvey,
  getAllFilledSurvey,
  createSurvey,
  updateSurvey,
  getSurveyByCode,
} = require('../src/Survey');
const express = require('express');
var router = express.Router();

router.get('/getAll', getAllSurvey);
router.get('/getAllFilled', getAllFilledSurvey);
router.get('/get/:code', getSurveyByCode);
router.post('/create', createSurvey);
router.post('/update', updateSurvey);

module.exports = router;