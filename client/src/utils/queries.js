import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query user($email: String) {

    user(email: $email) {

      messages
      orders {
        products
         {
          _id
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query products($category: ID, $name: String) {
    products(catergory: $category, name: $name) {
      _id
      name
      description
      image
      price
      bidderName
      bidValue
      bidtimestamp
      sold
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getcheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
