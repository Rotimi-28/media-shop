const { Schema } = require("mongoose");

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = model("order", orderSchema);

modules.export = { Order };
