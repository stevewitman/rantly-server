var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./controllers/user');
var rantController = require('./controllers/rant');


mongoose.connect('mongodb://localhost:27017/rantly');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

// Create endpoint handlers for /rants
router.route('/rants')
  .post(rantController.postRants)
  .get(rantController.getRants);

// Create endpoint handlers for /rants/:rant_id
router.route('/rants/:rant_id')
  .get(rantController.getRant)
  .put(rantController.putRant)
  .delete(rantController.deleteRant);

app.use('/api', router);

app.listen(3000);
