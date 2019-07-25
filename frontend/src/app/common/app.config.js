angular
  .module('common')
  .config(['ParseProvider', function (ParseProvider) {
      ParseProvider.serverURL = 'https://parseapi.back4app.com';
      ParseProvider.initialize(
          'L7kvLPH8iQUAfij2D10kInatDDtirG9RYXbD4bcx', // This is your Application ID
          'gvTjfjI3qF9DKL2dgV15s586a6UdAMMKGsqDMITd' // This is your Javascript key
      );
  }]);
