const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const todoGraphQLType = require('./todoType');
const Todo = require('../models/todo');

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getTodo: {
      type: todoGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        const { id } = args;
        return Todo.findById(id);
      },
    },
    getTodos: {
      type: new GraphQLList(todoGraphQLType),
      resolve: () => {
        return Todo.find().exec();
      },
    },
  },
});

module.exports = Query;
