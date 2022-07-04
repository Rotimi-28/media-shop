const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.types.ObjectId,
            ref: "Product"
        }
    ]
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;