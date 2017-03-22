import UserDetailModule from './userDetail'
import UserDetailController from './userDetail.controller';
import UserDetailComponent from './userDetail.component';
import UserDetailTemplate from './userDetail.html';

describe('UserDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserDetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(UserDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserDetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserDetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserDetailController);
      });
  });
});
