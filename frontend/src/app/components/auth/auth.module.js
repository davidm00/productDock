/**
 *
 * @ngdoc module
 * @name components.auth
 *
 * @requires ui.router
 * @requires firebase
 *
 * @description
 *
 * This is the auth module. It includes our auth components
 *
 **/
angular
  .module('components.auth', [
    'ui.router'
  ])
  .run(function($transitions, $state, AuthService) {

    $transitions.onStart({
      to: (state) => {
        console.log(state);
        return !!(state.data && state.data.requiredAuth)
      }
    }, () => {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });

    $transitions.onStart({
      to: 'auth.*'
    }, () => {
      if (AuthService.isAuthenticated()) {
        return $state.target('app.catalogue');
      }
    });
  });
