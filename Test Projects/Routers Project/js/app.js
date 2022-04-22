define([
  'underscore',
  'backbone',
  'routes/app.routes',
  'views/nav.view',
], function (_, Backbone, AppRouter, NavView) {
  let initialize = function () {
    let router = new AppRouter();
    Backbone.history.start();
    let navViews = new NavView({ router: router, el: '#nav' });
  };

  return {
    initialize: initialize,
  };
});
