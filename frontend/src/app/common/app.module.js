/**
 *
 * @ngdoc module
 * @name common
 *
 * @requires ui.router
 *
 * @description
 *
 * This is the common module. It includes a run method that setups the loading bar.
 *
 **/
angular
  .module('common', [
    'ui.router',
    'ngParse',
    'angular-loading-bar'
  ])
  .run(function ($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  });
