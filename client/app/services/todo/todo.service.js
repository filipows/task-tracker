import angular from 'angular';

const API_URL = 'http://jsonplaceholder.typicode.com';

class TodoService {
  constructor(Constants, $http, $q) {
    this.Constants = Constants;
    this.$http = $http;
    this.$q = $q;
  }

  getTodoByUserId(userId) {
    return this.getAllTodos().then( (allTodos) => {
      let filtered = allTodos.filter((todo) => todo.userId === userId ) 
      return filtered;
    });
  }

  getAllTodos() {
    let deferred = this.$q.defer();
    this.$http.get(this.Constants.API_URL + '/todos')
      .then((resp) => {   
          deferred.resolve(resp.data);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise;
  }
}

TodoService.$inject = ['Constants', '$http', '$q'];

export default TodoService;