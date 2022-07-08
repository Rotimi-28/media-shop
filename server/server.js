const express = require("express");
const { apolloServer } = require("apollo-server-express")
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const events = require("./events");
const db = require("./config/connection");
const cors = reqire("cors")


// Port localhost
const PORT = process.env.PORT || 3001
const app = express();
const server = new apolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/events", cors(), events.subscribe);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.json(__dirname, "../client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.json(__dirname, "../client/build/index.html"));
    });

}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQl at http://localhost:${PORT}${server.grahqlPath}`);
    });
});

