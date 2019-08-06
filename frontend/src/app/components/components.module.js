/**
 *
 * @ngdoc module
 * @name components
 *
 * @requires components.auth
 * @requires components.dock
 * @description
 *
 * This is the components module. It includes all of our components.
 *
 **/
 
angular
  .module('components', [
    'components.auth',
    'ngMessages',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngParse'
  ]);
