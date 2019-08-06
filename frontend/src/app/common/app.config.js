angular
  .module('common')
  .config(['ParseProvider', function (ParseProvider) {
      ParseProvider.serverURL = 'https://parseapi.back4app.com';
      ParseProvider.initialize(
          '3u6fAYo1XHQsXALYlKsaVRYVBevAh2MQGM1BaOJh', // This is your Application ID
          'Uyin9xuDYcu1wFgcIOq2BJsdtCjeUAgW0G0GzeG7' // This is your Javascript key
      );
  }]);
