var Rant = require('../models/rant');

exports.postRants = function(req, res) {
  var rant = new Rant();

  rant.title = req.body.title;
  rant.body = req.body.body;

  rant.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Rant was successfully added', data: rant });
  });
};

// Create endpoint /api/rant for GET
exports.getRants = function(req, res) {
  Rant.find(function(err, rants) {
    if (err)
      res.send(err);

    res.json(rants);
  });
};

// Create endpoint /api/rants/:rant_id for GET
exports.getRant = function(req, res) {
  Rant.findById(req.params.rant_id, function(err, rant) {
    if (err)
      res.send(err);

    res.json(rant);
  });
};

// Create endpoint /api/rants/:rant_id for PUT
exports.putRant = function(req, res) {
  Rant.findById(req.params.rant_id, function(err, rant) {
    if (err)
      res.send(err);

    rant.title = req.body.title;
    rant.body = req.body.body;

    rant.save(function(err) {
      if (err)
        res.send(err);

      res.json(rant);
    });
  });
};

// Create endpoint /api/rants/:rant_id for DELETE
exports.deleteRant = function(req, res) {
  Rant.findByIdAndRemove(req.params.rant_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Rant was successfully removed' });
  });
};
