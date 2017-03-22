import angular from 'angular';
import UserService from './user.service';

let UserServiceModule = angular.module('app.services.user', [])
  .service('UserService', UserService)
  .name;

export default UserServiceModule;