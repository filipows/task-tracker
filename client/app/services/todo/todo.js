import angular from 'angular';
import TodoService from './todo.service';

let TodoServiceModule = angular.module('app.services.todo', [])
  .service('TodoService', TodoService)
  .name;

export default TodoServiceModule;