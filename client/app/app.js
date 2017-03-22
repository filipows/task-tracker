import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularTouch from 'angular-touch';

import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';


import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

angular.module('app', [
    uiRouter,
    angularAnimate,
    angularTouch,
    Components,
    Services
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
