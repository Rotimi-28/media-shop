const { gql } = require("apollo-server-express");

const typeDefs = gql`
types Category {
    _id: ID
    name: String
}
type Product {
    _id: ID 
    name: string
    image: String
    quantity: Int
    price: float 
    category: Category
    bidderId: String
    bidderName: String
    bidValue: float
    BidTimestamp: String
    sold: Boolen
}
type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}
type User {
    _id: ID 
    firstName: string
    lastName: String
    email: String
    order: [Order]
    message: [String]
}
 type Auth {
    user: User
 }
type Query {
    categories: [Category]
    products(category: ID, name: string); [Product]
    product(_id: ID!): Product
    user(email:String): User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}
type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!): Auth
    addOrder(products: [ID!]): Order
    updateUser(firstName: String, lastName: String, email: String): User
    updateProduct(_id: ID!, value: float!, bidderId:String!, bidderName:String!): Product
}
type checkout {
    session: ID
}
`;

module.exports = typeDefs;