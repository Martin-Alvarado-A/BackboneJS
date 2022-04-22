define([
  'jquery',
  'underscore',
  'backbone',
  '../events/bus.event',
  '../views/home.view',
  '../views/cars.view',
  '../views/boats.view',
  '../collections/cars.collection',
], function (
  $,
  _,
  Backbone,
  Bus,
  HomeView,
  CarsView,
  BoatsView,
  CarsCollection
) {
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
      let view = new CarsView({
        el: '#container',
        model: CarsCollection,
        bus: Bus,
      });
      view.render();
    },
    viewBoats: function () {
      let view = new BoatsView({ el: '#container' });
      view.render();
    },
  });

  return AppRouter;
});
