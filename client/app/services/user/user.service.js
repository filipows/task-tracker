import angular from 'angular';

const API_URL = 'http://jsonplaceholder.typicode.com';

class UserService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getUserById(userId) {
    let deferred = this.$q.defer();
    this.$http.get(API_URL + `/users/${userId}`)
      .then((resp) => {   
          deferred.resolve(resp.data);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise;
 }

  getAllUsers() {
    let deferred = this.$q.defer();
    this.$http.get(API_URL + '/users')
      .then((resp) => {   
          deferred.resolve(resp.data);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise;
  }
}

UserService.$inject = ['$http', '$q'];

export default UserService;