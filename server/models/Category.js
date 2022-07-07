const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: trim
    }
});

const Category = model("Category", categorySchema);

export default Category;