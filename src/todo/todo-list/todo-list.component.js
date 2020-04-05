import angular from 'angular';

class TodoListController {
}

const TodoListComponent = {
    name: 'todoList',
    controller: TodoListController,
    controllerAs: 'todoListCtrl',
    bindings: {
        todos: '<',
        removeTodo: '&',
    },
    template: require('./todo-list.html'),
};

export default angular.module('app.todos.list', [])
    .component('todoList', TodoListComponent)
    .name;

