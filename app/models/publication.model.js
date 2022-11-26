const { Schema, model } = require("mongoose");

const publicationSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  ownerCC: {
    type: Number,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
  tags: {
    type: Array,
    default: [],
  },

  price: {
    type: Number,
    required: true,
  },

  reviewsScores: {
    type: Number,
    default: 0,
  },

  reviews: {
    type: Array,
    default: [],
  },
});

module.exports = model("Publication", publicationSchema);
