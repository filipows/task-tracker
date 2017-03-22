import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userDetailComponent from './userDetail.component';

let userDetailModule = angular.module('userDetail', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('user', {
      url: '/user/{userId:int}',
      component: 'userDetail'
    });
})

.component('userDetail', userDetailComponent)

.name;  

export default userDetailModule;
