const mongoose = require("mongoose");

mongoose.connection(process.env.MONGODB_URI || "mongodb://localhost/media-shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;