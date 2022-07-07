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

const Order = model("order", orderSchema);

export default Order;