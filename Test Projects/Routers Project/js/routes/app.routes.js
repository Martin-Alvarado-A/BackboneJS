define([
  'jquery',
  'underscore',
  'backbone',
  '../events/bus.event',
  '../views/home.view',
  '../views/cars.view',
  '../views/boats.view',
  '../collections/cars.collection',
  '../collections/boats.collection',
], function (
  $,
  _,
  Backbone,
  Bus,
  HomeView,
  CarsView,
  BoatsView,
  CarsCollection,
  BoatsCollection
) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      home: 'viewHome',
      cars: 'viewCars',
      boats: 'viewBoats',
      '*other': 'viewHome',
    },
    viewHome: function () {
      let view = new HomeView({ el: '#list' });
      view.render();
    },
    viewCars: function () {
      let view = new CarsView({
        el: '#list',
        model: CarsCollection,
        bus: Bus,
      });
      view.render();
    },
    viewBoats: function () {
      let view = new BoatsView({
        el: '#list',
        model: BoatsCollection,
        bus: Bus,
      });
      view.render();
    },
  });

  return AppRouter;
});
