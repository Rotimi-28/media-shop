const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: trim
    }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;