// Get packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Rant = require('./models/rant');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rantly');

// Create Express app
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create Express router
var router = express.Router();

// test route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'TEST MESSAGE' });
});

// Create a new route
var rantsRoute = router.route('/rants');

// Create endpoint /api/rants for POSTS
rantsRoute.post(function(req, res) {
  var rant = new Rant();
  rant.title = req.body.title;
  rant.body = req.body.body;
  rant.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Rant Successfully Added', data: rant });
  });
});

// Create endpoint /api/rants for GET
rantsRoute.get(function(req, res) {
  Rant.find(function(err, rants) {
    if (err)
      res.send(err);
    res.json(rants);
  });
});

// Create a route with the /rants/:rant_id prefix
var rantRoute = router.route('/rants/:rant_id');

// Create endpoint /api/rants/:rant_id for GET
rantRoute.get(function(req, res) {
  Rant.findById(req.params.rant_id, function(err, rant) {
    if (err)
      res.send(err);
    res.json(rant);
  });
});

app.use('/api', router);

app.listen(port);
console.log('Insert rant on port ' + port);
