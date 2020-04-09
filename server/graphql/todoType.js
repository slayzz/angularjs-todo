const { GraphQLObjectType, GraphQLString } = require('graphql');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
  }),
});

module.exports = TodoType;
