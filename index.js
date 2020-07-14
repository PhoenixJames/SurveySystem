var http = require('http');
var createError = require('http-errors');
var bodyParser = require('body-parser');
require('./database/connection');
var express = require('express');
var cors = require('cors');
const morgan = require('morgan');
var debug = require('debug')
var app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
// Routes
var keyValueRoute = require('./routes/KeyValueRoute');
var SurveyRoute = require('./routes/SurveyRoute');
app.use('/api/survey', SurveyRoute);

app.use(function(req, res, next) {
  next(createError(404));
});
// app.use(cors());
// Add headers
// app.use(function (req, res, next) {
//   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
const port = process.env.PORT || 3000
app.set('port', port);
const server = http.createServer(app);
server.listen(port,() => {
  console.log(`Server running at port `+port);
});