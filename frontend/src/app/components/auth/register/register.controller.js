function registerController(AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function() {
    ctrl.error = null;
    ctrl.user = {
      email:'',
      password: ''
    };
  };

  ctrl.createUser = function(event) {
    return AuthService
      .register(event.user)
      .then(function (user) {
        console.log('Success!');
        $state.go('common/app');
      }, function(reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('registerController', registerController);
