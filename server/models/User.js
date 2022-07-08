
const {Schema, model} = require("mongoose");
const bcrypt = require('bcrypt');
const Order = require('./Order');

const mongoose = require("mongoose");



const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  message: [
    {
      type: String,
    },
  ],
  orders: [Order.Schema],
});

const User = model("User", userSchema);

module.exports = User;