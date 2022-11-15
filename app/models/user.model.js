const { Schema, model } = require("mongoose");

const userShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    CC: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      enum: ["client", "professional", "admin"],
      default: "client",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userShema);
