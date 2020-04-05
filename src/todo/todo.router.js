import angular from 'angular';

function TodoRouter($stateProvider) {
    $stateProvider
        .state('todos', {
            url: '/todos',
            template: '<todo-main layout="column"></todo-main>',
            resolve: {
                todos: function (todoService) {
                    return todoService.getAll();
                },
            },
        })
        .state('todos.details', {
            url: '/{todoId}',
            component: 'todoDetail',
            resolve: {
                todo($transition$, todoService) {
                    const todoId = parseInt($transition$.params().todoId);
                    return todoService.getOne(todoId);
                },
            },
        });
}

TodoRouter.$inject = ['$stateProvider'];

export default angular.module('app.todos.router', [])
    .config(TodoRouter)
    .name;
