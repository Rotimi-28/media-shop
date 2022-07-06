import mongoose from "mongoose";

const { Schema } = mongoose;

const Bid = new Schema({
    _id: {
        type: String,
        required: false,
        trim: true
    },
    name: {
        type: String,
        required: false,
        trim: true
    },
    value: {
        type: Number,
        required: false
    }
});

export default Bid;