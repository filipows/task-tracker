import UserTodosModule from './userTodos'
import UserTodosController from './userTodos.controller';
import UserTodosComponent from './userTodos.component';
import UserTodosTemplate from './userTodos.html';

describe('UserTodos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserTodosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserTodosController();
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
      expect(UserTodosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserTodosComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserTodosTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserTodosController);
      });
  });
});
