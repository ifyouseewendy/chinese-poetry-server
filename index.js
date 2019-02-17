var express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Database
const db = require('better-sqlite3')('./db/ci.db');

// GraphQL
const typeDefs = gql`
  type Query {
    hello: String
    ci: [CI]
  }
  type CI {
      rhythmic: String
      author: String
      content: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        ci: () => db.prepare('SELECT * FROM ci limit 1').all(),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 3000;
app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
