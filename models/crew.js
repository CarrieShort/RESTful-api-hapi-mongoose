const mongoose = require('mongoose');

var crewSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  rank: { type: String, default: 'Red Shirt' },
  ship: { type: String, default: 'Firefly' }
});

module.exports = mongoose.model('Crew', crewSchema);
