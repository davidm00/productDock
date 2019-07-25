function AuthFormController($state) {
var ctrl = this;
  this.isLogin = $state.current.name === 'auth.login';

  ctrl.$onChanges = function(changes) {
    if (changes.user) {
      console.log();
      ctrl.user = angular.copy(ctrl.user);
    }
  };
  ctrl.submitForm = function() {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  }
};

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);
