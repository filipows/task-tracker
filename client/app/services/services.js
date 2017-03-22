import angular from 'angular';
import User from './user/user';

let servicesModule = angular.module('app.services', [
  User
])
  
.name;

export default servicesModule;
