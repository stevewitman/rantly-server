// Get packages
var express = require('express');

// Create Express app
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create Express router
var router = express.Router();

// test route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'TEST MESSAGE' });
});

// Register all our routes with /api
app.use('/api', router);

// Start server
app.listen(port);
console.log('Insert beer on port ' + port);
