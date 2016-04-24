const mongoose = require('mongoose');

var crewSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  rank: { type: String, default: 'Red Shirt' }
});

module.exports = mongoose.model('Crew', crewSchema);
