const { GraphQLSchema } = require('graphql');
const Query = require('./query');
const Mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutations,
});
