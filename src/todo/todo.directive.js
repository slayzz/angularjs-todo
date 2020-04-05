import angular from 'angular';

class TodoMainController {
    constructor(todoService, $state) {
        this.todoService = todoService;
        this.$state = $state;
        this.todos = this.todoService.getAll();
    }

    updateTodo(todo) {
        this.todoService.updateTodo(todo);
        this.todos = this.todoService.getAll();
    }

    removeTodo(todoId) {
        this.todoService.removeTodo(todoId);
        this.todos = this.todoService.getAll();
    }

    addNew() {
        this.todoService.createTodo('Default Title', 'Default Text');
        this.todos = this.todoService.getAll();
        this.$state.go('todos.details', {todoId: this.todoService.lastId});
    }
}

TodoMainController.$inject = ['todoService', '$state'];

function todoMain() {
    return {
        restrict: 'E',
        template: require('./todos.html'),
        controller: TodoMainController,
        controllerAs: 'todoMainCtrl',
    }
}

export default angular.module('app.todos.main', []).directive('todoMain', todoMain).name
