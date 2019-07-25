var authForm = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: '&' // Callback
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
};

angular
  .module('components.auth')
  .component('authForm', authForm);
