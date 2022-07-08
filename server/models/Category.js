const { Schema, model } = require("mongoose");


const categorySchema = new Schema({
  name: {
    type: String,
    required: false,
    trim: trim,
  },
});

const Category = model("Category", categorySchema);

module.exports = { Category };
