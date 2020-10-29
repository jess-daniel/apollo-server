const Query = require("./query");
const Session = require("./session");
const Mutation = require("./mutation");

module.exports = {
  Query,
  Session,
  Mutation,
  Room: {
    EUROPA: "Europa",
    SOL: "Sol",
    SATURN: "Saturn",
  },
  SessionOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      return "Session";
    },
  },
};
