const { ApolloServer } = require("apollo-server");

const SessionAPI = require("./datasources/sessions");
const SpeakerAPI = require("./datasources/speakers");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});