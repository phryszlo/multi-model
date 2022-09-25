const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  level: { type: Number, required: true },
  weapons: [{
    type: Schema.Types.ObjectId,
    ref: "Weapon"
  }],
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: "Vehicle"
  }]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;