class UserDetailController {
  constructor($stateParams) {
    this.name = 'userDetail';
    this.userId = $stateParams.userId;
  }
}

UserDetailController.$inject = ['$stateParams'];

export default UserDetailController;
