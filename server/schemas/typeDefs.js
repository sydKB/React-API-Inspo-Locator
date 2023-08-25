const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
  }

type User {
    _id: ID
    username: String
    email: String
    password: String
  }
`;

module.exports = typeDefs;
