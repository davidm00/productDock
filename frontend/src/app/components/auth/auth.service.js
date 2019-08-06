function AuthService() {
  var authData = null;

  function storeAuthData(response) {
    authData = response;
    return authData;
  }

  function onSignIn() {
    authData = Parse.User.current();
    return new Promise (function(resolve, reject) {
      if (typeof(authData) !== 'undefined') {
        resolve(true);
      }
      else reject(false);
    });
    // authData = user;
    // return auth.$requireSignIn();
  }

  function clearAuthData() {
    authData = null;
  }

  this.login = function(user) {
    return Parse.User.logIn(user.email, user.password);
    // return auth
    //   .$signInWithEmailAndPassword(user.email, user.password)
    //   .then(storeAuthData);
  }
  this.register = function(user) {
    console.log('hit');
    let usr = new Parse.User();
    usr.set('username', user.email);
    usr.set('password', user.password);
    return usr.signUp();
    // return auth
    //   .$createUserWithEmailAndPassword(user.email, user.password)
    //   .then(storeAuthData);
  };
  this.logout = function() {
    // return auth
      // .$signOut()
      // .then(function clearAuthData() {
      //   authData = null;
      // });
  }
  this.requireAuthentication = function() {
    return new Promise((resolve, reject) => {
      if(typeof('Parse.User.current()')!== 'undefined') {
        resolve(true);
      }
      else resolve(false);
    });
    // return auth
      // .$waitForSignIn().then(onSignIn();
  };
  this.isAuthenticated = function() {
      return !!authData; // null || {user}
    };
  this.getUser = function() {
    if (authData) {
      return authData;
    }
  };
}

  angular
    .module('components.auth')
    .service('AuthService', AuthService);
