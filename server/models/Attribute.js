const { Schema } = require("mongoose");

const attributeSchema = new Schema({
  Strength: {
    type: Number,
    required: true,
    default: 10,
  },
  Dexterity: {
    type: Number,
    required: true,
    default: 10,
  },
  Intelligence: {
    type: Number,
    required: true,
    default: 10,
  },
  Wisdom: {
    type: Number,
    required: true,
    default: 10,
  },
  Charisma: {
    type: Number,
    required: true,
    default: 10,
  },
});

module.exports = attributeSchema;
