const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const typeDefs = gql`
  type Query {
    googleMapsScriptUrl: String!
  }
`;

const resolvers = {
  Query: {
    googleMapsScriptUrl: () => {
      const googleMapsApiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
      return `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initMap`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
