import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userTodosComponent from './userTodos.component';

let userTodosModule = angular.module('userTodos', [
  uiRouter
])

.component('userTodos', userTodosComponent)

.name;

export default userTodosModule;
