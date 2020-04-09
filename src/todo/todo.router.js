import angular from 'angular';

function TodoRouter($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/todos',
      template: '<todo-main layout="column"></todo-main>',
    })
    .state('todos.details', {
      url: '/{todoId}',
      component: 'todoDetail',
      resolve: {
        todo$($transition$, todoService) {
          return todoService.getOne($transition$.params().todoId);
        },
      },
    });
}

TodoRouter.$inject = ['$stateProvider'];

export default angular.module('app.todos.router', []).config(TodoRouter).name;
