const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  class: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: false },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  }
});

const Vehicle = new mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;