import angular from 'angular';
import uirouter from 'angular-ui-router';
import todo from './todo/todo.module';
import AppRouter from './app.router';
import Storage from './common/storage.provider';

import 'angular-material';
import './styles/global.css';

angular
  .module('app', [uirouter, 'ngMaterial', todo])
  .config(AppRouter)
  .provider(Storage.name, Storage);
