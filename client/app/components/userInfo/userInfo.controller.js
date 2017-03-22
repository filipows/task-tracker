class UserInfoController {
  constructor(UserService) {
    this.UserService = UserService;
    this.name = 'userInfo';
    this.user = {};
    this.loading = true;
  }

  $onInit() {
    this.UserService.getUserById(this.userId).then( (user)=> {
      this.user = user;
      this.loading = false;
    });
  } 
}

UserInfoController.$inject = ['UserService'];

export default UserInfoController;
