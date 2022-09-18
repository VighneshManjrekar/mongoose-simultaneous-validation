const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requried: true,
  },
  title: {
    type: String,
    maxLength: 3,
    required: true,
  },
  rating: {
    type: Number,
    default: 3,
    max: 5,
  },
});

module.exports = mongoose.model("Post", PostSchema);
