const mongoose = require('mongoose');
const debug = require('debug')('DEBUG');
mongoose.set('useFindAndModify', false);
// mongoose.connect('mongodb://localhost:27017/test'
//   , {useNewUrlParser: true, useUnifiedTopology: true});
  // staging
  mongoose.connect('mongodb://admin:admin@testcluster-shard-00-00.iucwd.gcp.mongodb.net:27017,testcluster-shard-00-01.iucwd.gcp.mongodb.net:27017,testcluster-shard-00-02.iucwd.gcp.mongodb.net:27017/test?ssl=true&replicaSet=atlas-5zd7sk-shard-0&authSource=admin&retryWrites=true&w=majority'
  , {useNewUrlParser: true, useUnifiedTopology: true});
  // production
  // mongoose.connect('  mongodb://admin_user:passw0rd@surveysystemcluster-shard-00-00.dlxgk.mongodb.net:27017,surveysystemcluster-shard-00-01.dlxgk.mongodb.net:27017,surveysystemcluster-shard-00-02.dlxgk.mongodb.net:27017/surveysystem?ssl=true&replicaSet=atlas-5wbdvb-shard-0&authSource=admin&retryWrites=true&w=majority'
  // , {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  debug('Mongo database connection is successful.');
});