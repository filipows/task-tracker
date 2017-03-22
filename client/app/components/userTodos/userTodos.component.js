import template from './userTodos.html';
import controller from './userTodos.controller';
import './userTodos.scss';

let userTodosComponent = {
  restrict: 'E',
  bindings: {
    userId: '='
  },
  template,
  controller
};

export default userTodosComponent;
