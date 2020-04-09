const { GraphQLObjectType, GraphQLString } = require('graphql');
const TodoGraphQLType = require('./todoType');
const Todo = require('../models/todo');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoGraphQLType,
      args: {
        title: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const { title, text } = args;
        const todo = new Todo({ title, text });
        return todo.save();
      },
    },
    updateTodo: {
      type: TodoGraphQLType,
      args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const { id, title, text } = args;
        const todo = await Todo.findById(id);
        todo.title = title;
        todo.text = text;
        return todo.save();
      },
    },
    removeTodo: {
      type: TodoGraphQLType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const { id } = args;
        return Todo.deleteOne({ _id: id }).exec();
      },
    },
  },
});

module.exports = Mutation;
