class UserTodosController {
  constructor(TodoService) {
    this.TodoService = TodoService;
    this.name = 'userTodos';
    this.todos = [];
    this.newTodo = '';
    this.filter = 'All';
    this.loading = true;
  }

  getFilteredTodos() {
    switch(this.filter) {
      case 'Completed':
        return this.todos.filter((todo) => todo.completed )
      case 'Active':
        return this.todos.filter((todo) => !todo.completed )
    }
    return this.todos;
  }

  addTodo(title) {
    if (title) {
      const newTodo = {
        title,
        completed: false,
        userId: this.userId,
        id: Date.now()
      }
      this.todos.unshift(newTodo);
      this.newTodo = '';
    } else {

    }
    // $http request to update resources
  }

  log(obj){
    console.log(obj);
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.findIndex( (el) => todo.id === el.id ), 1);
  }

  toggle(todo) {
    todo.completed = !todo.completed;
  }

  $onInit() {
    this.TodoService.getTodoByUserId(this.userId).then( (todos) => {
      this.todos = todos;
      this.loading = false;
    });    
  }
}

UserTodosController.$inject = ['TodoService'];

export default UserTodosController;
