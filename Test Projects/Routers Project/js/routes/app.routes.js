define([
  'jquery',
  'underscore',
  'backbone',
  '../views/home.view',
  '../views/cars.view',
  '../views/boats.view',
], function ($, _, Backbone, HomeView, CarsView, BoatsView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      home: 'viewHome',
      cars: 'viewCars',
      boats: 'viewBoats',
      '*other': 'viewHome',
    },
    viewHome: function () {
      let view = new HomeView({ el: '#container' });
      view.render();
    },
    viewCars: function () {
      let view = new CarsView({ el: '#container' });
      view.render();
    },
    viewBoats: function () {
      let view = new BoatsView({ el: '#container' });
      view.render();
    },
  });

  return AppRouter;
});
