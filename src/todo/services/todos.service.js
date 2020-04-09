import angular from 'angular';
import { GraphQLClient } from 'graphql-request';
import { from, defer } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { mutations, queries } from '../../graphql/todo';

const GRAPHQL_ENDPOINT = '/graphql';

class TodoService {
  constructor(storage) {
    this.storage = storage;
    this.graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);
  }

  getAll() {
    return this._graphQlRequest(queries.getTodos, {}, 'getTodos');
  }

  getOne(id) {
    return this._graphQlRequest(queries.getTodo, { id }, 'getTodo');
  }

  createTodo(title, text) {
    return this._graphQlRequest(mutations.addTodo, { title, text }, 'addTodo');
  }

  removeTodo(id) {
    return this._graphQlRequest(mutations.removeTodo, { id } );
  }

  updateTodo(todo) {
    return this._graphQlRequest(mutations.updateTodo, { ...todo }, 'updateTodo');
  }

  _graphQlRequest(query, variables, ...pluckArgs) {
    return !pluckArgs.length
      ? defer(() => from(this.graphqlClient.request(query, variables)))
      : defer(() => from(this.graphqlClient.request(query, variables)).pipe(pluck(...pluckArgs)));
  }

  static name = 'todoService';
}

export default angular.module('app.todos.services', []).service('todoService', TodoService).name;
