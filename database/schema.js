const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

// const KeyValueSchema = new mongoose.Schema(
//   {
//     key: { type: String },
//     value: { type: String },
//     createdAt: { type: Date },
//   },
// );
const SurveySchema = new mongoose.Schema(
  {
    code: { type: Number},
    townshipName: { type: String },
    villageTract: { type: String },
    villageName: {type: String},
    villageId: {type: String},
    registrationDate: {type: Date},
    beneficiaryMmName: {type: String},
    beneficiaryEngName: {type: String},
    web: {type: Boolean},
    webDate: {type: Date},
    webComment: {type: String},
    ppi: {type: Boolean},
    ppiDate: {type: Date},
    ppiComment: {type: String},
    app: {type: Boolean},
    appDate: {type: Date},
    appComment: {type: String},
  },
);


const Survey = mongoose.model('survey', SurveySchema);

module.exports = {
  Survey,
};