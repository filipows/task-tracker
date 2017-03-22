import angular from 'angular';
import ConstantsFactory from './constants.factory';

let constantsModule = angular.module('app.services.constants', [])

.factory('Constants', ConstantsFactory)
  
.name;

export default constantsModule;
