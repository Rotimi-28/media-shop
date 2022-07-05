const mongoose = require("mongoose");

const { Product } = require(".").default;

const { Schema } = require("./Order").default;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: [{
        type: String
       
    }],
    orders: [Order.Schema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;