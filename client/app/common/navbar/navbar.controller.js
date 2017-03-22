class NavbarController {
  constructor($state) {
    this.name = 'navbar';
    this.state = $state;
  }
}



NavbarController.$inject = ['$state'];

export default NavbarController;
