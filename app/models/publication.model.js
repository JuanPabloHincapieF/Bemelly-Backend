const { Schema, model } = require("mongoose");

const publicationSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  ownerData: {
    type: Object,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  reviewsScores: {
    type: Number,
  },

  reviews: {
    type: Array,
  },
});

module.exports = model("Publication", publicationSchema);
