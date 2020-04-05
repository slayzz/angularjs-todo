import angular from 'angular';
import uirouter from 'angular-ui-router';
import todoItemComponent from './todo-item/todo-item.component';
import todoListComponent from './todo-list/todo-list.component';
import todoDetailComponent from './todo-detail/todo-detail.component';
import TodosService from './services/todos.service';
import TodoRouter from './todo.router';
import todoMain from "./todo.directive";

export default angular
    .module('app.todo', [uirouter, TodosService, TodoRouter, todoItemComponent, todoDetailComponent, todoListComponent, todoMain])
    .name;


