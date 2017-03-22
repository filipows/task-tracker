import angular from 'angular';

class UserService {
  constructor(Constants, $http, $q) {
    this.Constants = Constants;
    this.$http = $http;
    this.$q = $q;
  }

  getUserById(userId) {
    let deferred = this.$q.defer();
    this.$http.get(this.Constants.API_URL + `/users/${userId}`)
      .then((resp) => {   
          deferred.resolve(resp.data);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise;
 }

  getAllUsers() {
    let deferred = this.$q.defer();
    this.$http.get(this.Constants.API_URL + '/users')
      .then((resp) => {   
          deferred.resolve(resp.data);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise;
  }
}

UserService.$inject = ['Constants', '$http', '$q'];

export default UserService;