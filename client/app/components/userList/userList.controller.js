class UserListController {
  constructor(UserService) {
    console.log('userlist controller');
    this.name = 'userList';
    this.users = []    
    this.loading = true;

    UserService.getAllUsers().then( (users) => {
      console.log(users);
      this.users = users;
      this.loading = false;
    });
  }
}

UserListController.$inject = ['UserService'];

export default UserListController;
