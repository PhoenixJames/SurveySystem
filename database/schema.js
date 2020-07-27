const mongoose = require('mongoose');
const { Int32, Timestamp } = require('mongodb');

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
    registrationDate: {type: String},
    beneficiaryMmName: {type: String},
    beneficiaryEngName: {type: String},
    web: {type: Boolean},
    webDate: {type: Date},
    webComment: {type: String},
    web2: {type: Boolean},
    webDate2: {type: Date},
    webComment2: {type: String},
    ppi: {type: Boolean},
    ppiDate: {type: Date},
    ppiComment: {type: String},
    app: {type: Boolean},
    appDate: {type: Date},
    appComment: {type: String},
    username: {type: String},
  },
  { timestamps: true },
);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String},
    password: { type: String},
  },
  { timestamps: true },
);


const Survey = mongoose.model('survey', SurveySchema);
const User = mongoose.model('user', UserSchema);

module.exports = {
  Survey,
  User,
};