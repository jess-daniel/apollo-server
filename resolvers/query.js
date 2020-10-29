module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parents, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionAPI.getSessionById(id);
    } catch (error) {
      return { code: "Error", message: "server error", token: "token" };
    }
  },
  speakers: (parents, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parents, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
