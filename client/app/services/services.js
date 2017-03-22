import angular from 'angular';
import User from './user/user';
import Todo from './todo/todo';
import Constants from './constants/constants';

let servicesModule = angular.module('app.services', [
  User,
  Todo,
  Constants
])

.name;

export default servicesModule;
