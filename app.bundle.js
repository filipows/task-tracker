webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(298)},298:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=t(299),s=n(o),r=t(301),i=n(r),u=t(371),l=n(u),a=t(373),d=n(a),c=t(375),f=n(c),p=t(463),v=n(p),h=t(470),m=n(h);t(474),t(476),t(483),s.default.module("app",[i.default,l.default,d.default,f.default,v.default]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",m.default)},375:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(376),i=n(r),u=t(385),l=n(u),a=t(391),d=n(a),c=t(397),f=n(c),p=t(441),v=n(p),h=t(447),m=n(h),g=t(457),_=n(g),b=s.default.module("app.components",[i.default,l.default,d.default,f.default,v.default,m.default,_.default]).name;exports.default=b},376:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(377),l=n(u),a=s.default.module("home",[i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home"})}]).component("home",l.default).name;exports.default=a},377:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(378),s=n(o),r=t(379),i=n(r);t(381);var u={restrict:"E",bindings:{},template:s.default,controller:i.default};exports.default=u},378:function(e,exports){e.exports='<div class="container">\n  <div class="row">\n    <h3>Available users:</h3>\n  </div>\n\n  <user-list></user-list>\n\n</div>'},379:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=function e(){(0,s.default)(this,e),this.name="home"};exports.default=r},381:function(e,exports,t){var n=t(382);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},382:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},385:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(386),l=n(u),a=s.default.module("about",[i.default]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",component:"about"})}]).component("about",l.default).name;exports.default=a},386:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(387),s=n(o),r=t(388),i=n(r);t(389);var u={restrict:"E",bindings:{},template:s.default,controller:i.default};exports.default=u},387:function(e,exports){e.exports='<div class="container">\n  <div class="jumbotron">\n    <p>I\'m Chris,</p>\n    <p>Let\'s create something together! </p>\n  </div>\n</div>'},388:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=function e(){(0,s.default)(this,e),this.name="about"};exports.default=r},389:function(e,exports,t){var n=t(390);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},390:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},391:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(392),l=n(u),a=s.default.module("navbar",[i.default]).component("navbar",l.default).name;exports.default=a},392:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(393),s=n(o),r=t(394),i=n(r);t(395);var u={restrict:"E",bindings:{},template:s.default,controller:i.default};exports.default=u},393:function(e,exports){e.exports='<nav class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <a class="navbar-brand" href="/">Task Tracker</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li ng-class="{active: $ctrl.state.current.name === \'home\'}"><a ui-sref="home">Home</a></li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li ng-class="{active: $ctrl.state.current.name === \'about\'}"><a ui-sref="about">About me</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>'},394:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=function e(t){(0,s.default)(this,e),this.name="navbar",this.state=t};r.$inject=["$state"],exports.default=r},395:function(e,exports,t){var n=t(396);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},396:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},397:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(398),l=n(u),a=s.default.module("userList",[i.default]).component("userList",l.default).name;exports.default=a},398:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(399),s=n(o),r=t(400),i=n(r);t(439);var u={restrict:"E",bindings:{},template:s.default,controller:i.default};exports.default=u},399:function(e,exports){e.exports='<div class="row">\n  <div class="row">\n    <div class="col-md-4 pull-right nopadding">\n      <input ng-model="searchText" type="text" class="form-control" placeholder="Search for user">\n    </div>\n  </div>\n  <br />\n  <div class="row">\n    <ul class="list-group">\n      <div class="spinner abs-center" ng-if="$ctrl.loading">\n        <i class="fa fa-spinner fa-spin" style="font-size:48px;"></i>\n      </div>\n      <a ng-if="!$ctrl.loading" ng-repeat="user in $ctrl.users | filter:searchText" \n        ui-sref="user({userId: user.id})" class="list-group-item list-group-item-action">\n        {{user.id}}. {{user.name}} ({{user.username}})\n        <span class="badge alert-success">Completed: {{user.tasksCompleted}}</span>\n        <span class="badge alert-warning">Active: {{user.tasksActive}}</span>\n      </a>\n    </ul>\n  </div>\n\n</div>'},400:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(401),s=n(o),r=t(380),i=n(r),u=function e(t,n){var o=this;(0,i.default)(this,e),this.name="userList",this.users=[],this.loading=!0,t.getAllUsers().then(function(e){n.getAllTodos().then(function(t){o.users=e.map(function(e){var n=t.filter(function(t){return t.userId===e.id&&t.completed}).length,o=t.filter(function(t){return t.userId===e.id&&!t.completed}).length;return(0,s.default)({},e,{tasksCompleted:n,tasksActive:o})}),o.loading=!1})})};u.$inject=["UserService","TodoService"],exports.default=u},439:function(e,exports,t){var n=t(440);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},440:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},441:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(442),l=n(u),a=s.default.module("userDetail",[i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";e.state("user",{url:"/user/{userId:int}",component:"userDetail"})}]).component("userDetail",l.default).name;exports.default=a},442:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(443),s=n(o),r=t(444),i=n(r);t(445);var u={restrict:"E",bindings:{},template:s.default,controller:i.default};exports.default=u},443:function(e,exports){e.exports='<div class="container">\n  <div class="row">\n    <div class="col-md-6">\n        <user-info user-id="$ctrl.userId"></user-info>\n    </div>\n    <div class="col-md-6">\n      <user-todos user-id="$ctrl.userId"></user-todos>\n    </div>\n  </div>\n</div>'},444:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=function e(t){(0,s.default)(this,e),this.name="userDetail",this.userId=t.userId};r.$inject=["$stateParams"],exports.default=r},445:function(e,exports,t){var n=t(446);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},446:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},447:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(448),l=n(u),a=s.default.module("userInfo",[i.default]).component("userInfo",l.default).name;exports.default=a},448:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(449),s=n(o),r=t(450),i=n(r);t(455);var u={restrict:"E",bindings:{userId:"="},template:s.default,controller:i.default};exports.default=u},449:function(e,exports){e.exports='<div class="well">\n  <div class="row">\n      <div class="col-sm-3 col-md-4">\n          <img src="http://websamplenow.com/30/userprofile/images/avatar.jpg" alt="" class="img-rounded img-responsive" />\n      </div>\n      <div class="spinner abs-center" ng-if="$ctrl.loading">\n        <i class="fa fa-spinner fa-spin" style="font-size:48px;"></i>\n      </div>\n      \n      <div ng-if="!$ctrl.loading" class="col-sm-9 col-md-8">\n          <h4>{{$ctrl.user.name}}</h4>\n          <i class="glyphicon glyphicon-user"></i> {{$ctrl.user.username}}\n          <p>\n            <i class="glyphicon glyphicon-envelope"></i> <a ng-href="mailto:{{$ctrl.user.email}}"> {{$ctrl.user.email}}</a>\n            <br />\n            <i class="glyphicon glyphicon-globe"></i><a ng-href="http://{{$ctrl.user.website}}" target="_blank"> http://{{$ctrl.user.website}}</a>\n            <br />\n            <i class="glyphicon glyphicon-phone"></i> {{$ctrl.user.phone}}\n            <br />\n            <i class="glyphicon glyphicon-map-marker"></i> {{$ctrl.user.address.city}}, {{$ctrl.user.address.street}}\n          </p>\n      </div>\n  </div>\n</div>\n'},450:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=t(451),i=n(r),u=function(){function e(t){(0,s.default)(this,e),this.UserService=t,this.name="userInfo",this.user={},this.loading=!0}return(0,i.default)(e,[{key:"$onInit",value:function(){var e=this;this.UserService.getUserById(this.userId).then(function(t){e.user=t,e.loading=!1})}}]),e}();u.$inject=["UserService"],exports.default=u},455:function(e,exports,t){var n=t(456);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},456:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"",""])},457:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(301),i=n(r),u=t(458),l=n(u),a=s.default.module("userTodos",[i.default]).component("userTodos",l.default).name;exports.default=a},458:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(459),s=n(o),r=t(460),i=n(r);t(461);var u={restrict:"E",bindings:{userId:"="},template:s.default,controller:i.default};exports.default=u},459:function(e,exports){e.exports='<div class="well well">\n  <h4>User\'s todos: </h4>\n  <div class="row input-todo">\n    <div class="col-md-12">\n      <div class="input-group">\n        <input \n          ng-model="$ctrl.newTodo" \n          type="text" \n          class="form-control" \n          placeholder="What else needs to be done?"\n          ng-keyup="$event.keyCode == 13 && $ctrl.addTodo($ctrl.newTodo)">\n        <span class="input-group-btn">\n          <button class="btn btn-default" type="button" ng-click="$ctrl.addTodo($ctrl.newTodo)">+</button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class="filters">Show: \n    <button type="button" class="btn btn-xs" ng-click="$ctrl.filter=\'All\'" ng-class="{\'btn-primary\': $ctrl.filter==\'All\'}">All</button>\n    <button type="button" class="btn btn-xs" ng-click="$ctrl.filter=\'Active\'" ng-class="{\'btn-primary\': $ctrl.filter==\'Active\'}">Active</button>\n    <button type="button" class="btn btn-xs" ng-click="$ctrl.filter=\'Completed\'" ng-class="{\'btn-primary\': $ctrl.filter==\'Completed\'}">Completed</button>\n  </div>\n  <div class="row">\n    <div class="col-md-12">\n      <div class="spinner" ng-if="$ctrl.loading">\n        <i class="fa fa-spinner fa-spin" style="font-size:48px;"></i>\n      </div>\n      <ul ng-if="!$ctrl.loading" class="list-group todo-list">\n        <a ng-repeat="todo in $ctrl.getFilteredTodos()" \n          class="list-group-item list-group-item-action todo-item" ng-class="{\'line-through\': todo.completed}" \n          ng-click="$ctrl.toggle(todo)">\n          <input type="checkbox" disabled ng-model="todo.completed">&nbsp; {{todo.title}}\n          <button class="btn btn-xs btn-danger pull-right btn-remove-todo" ng-click="$ctrl.removeTodo(todo)">x</button>\n        </a>\n      </ul>\n    </div>\n  </div>\n</div>\n'},460:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=t(451),i=n(r),u=function(){function e(t){(0,s.default)(this,e),this.TodoService=t,this.name="userTodos",this.todos=[],this.newTodo="",this.filter="All",this.loading=!0}return(0,i.default)(e,[{key:"getFilteredTodos",value:function(){switch(this.filter){case"Completed":return this.todos.filter(function(e){return e.completed});case"Active":return this.todos.filter(function(e){return!e.completed})}return this.todos}},{key:"addTodo",value:function(e){if(e){var t={title:e,completed:!1,userId:this.userId,id:Date.now()};this.todos.unshift(t),this.newTodo=""}}},{key:"removeTodo",value:function(e){this.todos.splice(this.todos.findIndex(function(t){return e.id===t.id}),1)}},{key:"toggle",value:function(e){e.completed=!e.completed}},{key:"$onInit",value:function(){var e=this;this.TodoService.getTodoByUserId(this.userId).then(function(t){e.todos=t,e.loading=!1})}}]),e}();u.$inject=["TodoService"],exports.default=u},461:function(e,exports,t){var n=t(462);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},462:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,"user-todos .todo-list{cursor:pointer;padding-top:10px}user-todos .filters{text-align:right}user-todos .btn-remove-todo{opacity:0}user-todos .todo-item:hover .btn-remove-todo{opacity:.3}user-todos .todo-item:hover .btn-remove-todo:hover{opacity:1}.line-through{text-decoration:line-through}",""])},463:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(464),i=n(r),u=t(466),l=n(u),a=t(468),d=n(a),c=s.default.module("app.services",[i.default,l.default,d.default]).name;exports.default=c},464:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(465),i=n(r),u=s.default.module("app.services.user",[]).service("UserService",i.default).name;exports.default=u},465:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=t(451),i=n(r),u=t(299),l=(n(u),function(){function e(t,n,o){(0,s.default)(this,e),this.Constants=t,this.$http=n,this.$q=o}return(0,i.default)(e,[{key:"getUserById",value:function(e){var t=this.$q.defer();return this.$http.get(this.Constants.API_URL+("/users/"+e)).then(function(e){t.resolve(e.data)},function(e){t.reject(e)}),t.promise}},{key:"getAllUsers",value:function(){var e=this.$q.defer();return this.$http.get(this.Constants.API_URL+"/users").then(function(t){e.resolve(t.data)},function(t){e.reject(t)}),e.promise}}]),e}());l.$inject=["Constants","$http","$q"],exports.default=l},466:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(467),i=n(r),u=s.default.module("app.services.todo",[]).service("TodoService",i.default).name;exports.default=u},467:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(380),s=n(o),r=t(451),i=n(r),u=t(299),l=(n(u),function(){function e(t,n,o){(0,s.default)(this,e),this.Constants=t,this.$http=n,this.$q=o}return(0,i.default)(e,[{key:"getTodoByUserId",value:function(e){return this.getAllTodos().then(function(t){var n=t.filter(function(t){return t.userId===e});return n})}},{key:"getAllTodos",value:function(){var e=this.$q.defer();return this.$http.get(this.Constants.API_URL+"/todos").then(function(t){e.resolve(t.data)},function(t){e.reject(t)}),e.promise}}]),e}());l.$inject=["Constants","$http","$q"],exports.default=l},468:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),s=n(o),r=t(469),i=n(r),u=s.default.module("app.services.constants",[]).factory("Constants",i.default).name;exports.default=u},469:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){var e={API_URL:"http://jsonplaceholder.typicode.com"};return e};exports.default=t},470:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(471),s=n(o);t(472);var r={template:s.default,restrict:"E"};exports.default=r},471:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <navbar></navbar>\n  <div ui-view></div>\n</div>\n'},472:function(e,exports,t){var n=t(473);"string"==typeof n&&(n=[[e.id,n,""]]);t(384)(n,{});n.locals&&(e.exports=n.locals)},473:function(e,exports,t){exports=e.exports=t(383)(),exports.push([e.id,".app{height:100%;margin-top:70px}.app .nopadding{padding:0!important;margin:0!important}.app .spinner{text-align:center;z-index:10;color:#337ab7}.app .abs-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.app .ng-enter{transition:.5s;opacity:0}.app .ng-enter-active{opacity:1}",""])}});
//# sourceMappingURL=app.bundle.js.map