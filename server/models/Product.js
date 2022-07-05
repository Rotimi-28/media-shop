import mongoose, { model } from "mongoose";
import _default from ".";
const { Product } = _default;

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    category: {
        type: Schema.Types.OBjectId,
        ref: "Category",
        required: true
    },
    BidderId: {
        type: String,
        required: false,
        trim: true
    },
    bidderName: {
        type: String,
        required: false,
        trim: true
    },
    bidValue: {
        type: String,
        required: false,
        trim: true
    },
    bidTimeStamp: {
        type: String,
        required: false,
        trim: true
    },
    sold: {
        type: Boolean,
        required: false,
        default: false
    }
});
 
const product = model("Product", productSchema);

export default Product;