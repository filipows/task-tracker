import template from './userInfo.html';
import controller from './userInfo.controller';
import './userInfo.scss';

let userInfoComponent = {
  restrict: 'E',
  bindings: {
    userId: '='
  },
  template,
  controller
};

export default userInfoComponent;
