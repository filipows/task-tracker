class UserListController {
  constructor(UserService, TodoService) {
    console.log('userlist controller');
    this.name = 'userList';
    this.users = []    
    this.loading = true;

    UserService.getAllUsers().then( (users) => {
      TodoService.getAllTodos().then( (todos) => {
        console.log(users);
        this.users = users.map((user) => {
          let tasksCompleted = todos.filter( (todo) => todo.userId === user.id && todo.completed).length
          let tasksActive = todos.filter( (todo) => todo.userId === user.id && !todo.completed).length
          
          return {
            ...user,
            tasksCompleted,
            tasksActive
          }
        })

        console.log(this.users);
        this.loading = false;
      })
    });
  }
}

UserListController.$inject = ['UserService', 'TodoService'];

export default UserListController;
