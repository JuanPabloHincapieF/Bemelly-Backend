const { Schema, model } = require("mongoose");

const counterSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  seq_value: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = model("Counter", counterSchema);
