import angular from 'angular';

class TodoDetailController {
  constructor($state, $scope) {
    this.$state = $state;
    this.$scope = $scope;
  }

  $onInit() {
    this.todo$.subscribe(todo => {
      this.$scope.$apply(() => {
        this.todo = todo;
        this.changedTodo = { ...this.todo };
      });
    });
  }

  close() {
    this.$state.go('todos');
  }

  isChanged() {
    return angular.equals(this.todo, this.changedTodo);
  }

  commit() {
    if (this.isChanged) {
      this.updateTodo({ todo: this.changedTodo });
    }
  }
}

TodoDetailController.$inject = ['$state', '$scope'];

const TodoDetailComponent = {
  name: 'todoDetail',
  controller: TodoDetailController,
  controllerAs: 'todoDetailCtrl',
  bindings: {
    todo$: '<',
    updateTodo: '&',
  },
  template: require('./todo-detail.html'),
};

export default angular.module('app.todos.detail', []).component('todoDetail', TodoDetailComponent)
  .name;
