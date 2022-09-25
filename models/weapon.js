const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const weaponSchema = Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  damage: { type: Number, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Player"
  }
});

const Weapon = new mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;