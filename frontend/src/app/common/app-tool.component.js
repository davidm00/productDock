var appTool = {
  bindings: {
    user: '<',
    onLogout: '&'
  },
  templateUrl: './app-tool.html'
};

angular
  .module('common')
  .component('appTool', appTool);
