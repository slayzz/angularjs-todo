import angular from 'angular';
import { concat } from 'rxjs';
import { RedrawerController } from '../common/RedrawerComponent';
import { last } from 'rxjs/operators';

class TodoMainController extends RedrawerController {
  constructor(todoService, $state, $scope) {
    super($scope);
    this.todoService = todoService;
    this.$state = $state;

    this.todos = [];

    this.todoService.getAll().subscribe(todoData => {
      this.todos = todoData;
      this.redraw();
    });
  }

  updateTodo(todo) {
    this.todoService.updateTodo(todo).subscribe(updatedTodo => {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      this.todos[index] = updatedTodo;
      this.redraw();
    });
  }

  removeTodo(todoId) {
    concat(this.todoService.removeTodo(todoId), this.todoService.getAll()).pipe(
      last(),
    )
      .subscribe(todoData => {
        this.todos = todoData;
        this.redraw();
      });
  }

  addNew() {
    this.todoService.createTodo('Default Title', 'Default Text')
      .subscribe(createdTodo => {
        const { id } = createdTodo;
        this.todos.push(createdTodo);
        this.$state.go('todos.details', { todoId: id });
      });
  }
}

TodoMainController.$inject = ['todoService', '$state', '$scope'];

function todoMain() {
  return {
    restrict: 'E',
    template: require('./todos.html'),
    controller: TodoMainController,
    controllerAs: 'todoMainCtrl',
  };
}

export default angular.module('app.todos.main', []).directive('todoMain', todoMain).name;
