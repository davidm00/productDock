angular
  .module('common')
  .run(function($uiRouter) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);
  });
