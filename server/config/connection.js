import { connection } from "mongoose";

connection(process.env.MONGODB_URI || "mongodb://localhost/media-shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

export default connection;