import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Navbar from './navbar/navbar';
import UserList from './userList/userList';
import UserDetail from './userDetail/userDetail';
import UserInfo from './userInfo/userInfo';
import UserTodos from './userTodos/userTodos';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Navbar,
  UserList,
  UserDetail,
  UserInfo,
  UserTodos
])

.name;

export default componentModule;
