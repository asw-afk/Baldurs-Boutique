const { Schema, model } = require("mongoose");
const attributeSchema = require("./Attribute");
const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Bob",
  },
  gender: {
    type: String,
  },
  author: {
    type: String,
    required: true,
    default: "Bob",
  },
  //TODO LINK THESE TO SCHEMAS
  attributes: attributeSchema,
  race: {
    type: String,
    required: true,
    default: "Human",
  },
  background: {
    type: String,
    required: true,
    default: "Acolyte",
  },
  class: {
    type: String,
    required: true,
    default: "Barbarian",
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
