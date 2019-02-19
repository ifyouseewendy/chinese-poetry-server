var express = require('express');
const { ApolloServer, gql, UserInputError } = require('apollo-server-express');

// Database
const db = require('better-sqlite3')('./db/ci.db');

// GraphQL
const typeDefs = gql`
  type Query {
    hello: String
    ci(perPage: Int = 10): [CI]
  }
  type CI {
      rhythmic: String!
      author: String!
      content: String!
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        ci: function(parent, args) {
            if (args.perPage > 30) {
                throw new UserInputError("Your arg 'perPage' is too big. 30 is the maximum");
            } else {
                return db.prepare('SELECT * FROM ci ORDER BY random() limit ?').all(args.perPage);
            }
        }
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 3000;
app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
