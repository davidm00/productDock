function loginController(AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function() {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.loginUser = function(event) {
    return AuthService
      .login(event.user)
      .then(function(user) {
        console.log('Success! Logged in ', user);
        $state.go('app');
      }, function(reason) {
        console.log(reason);
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('loginController', loginController);
