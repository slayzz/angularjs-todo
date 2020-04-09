import angular from 'angular';

class TodoItemController {
  constructor($scope, $state, $stateParams) {
    this.$state = $state;
    $scope.$watch(
      () => $stateParams.todoId,
      () => {
        this.todoId = $stateParams.todoId;
      }
    );
  }

  deleteTodo($event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.removeTodo();
    this.$state.go('todos');
  }
}
TodoItemController.$inject = ['$scope', '$state', '$stateParams'];

const TodoItemComponent = {
  name: 'todoItem',
  controller: TodoItemController,
  controllerAs: 'todoItemCtrl',
  bindings: {
    todo: '<',
    removeTodo: '&',
    onSelect: '&',
  },
  template: require('./todo-item.html'),
};

export default angular.module('app.todo.item', []).component('todoItem', TodoItemComponent).name;
