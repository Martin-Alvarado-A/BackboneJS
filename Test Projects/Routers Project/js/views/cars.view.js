define(['jquery', 'underscore', 'backbone', './car.view'], function (
  $,
  _,
  Backbone,
  CarView
) {
  let CarsView = Backbone.View.extend({
    tagName: 'ol',
    initialize: function (options) {
      this.bus = options.bus;
      this.model.on('add', this.onVehicleAdded, this);
      this.bus.on('addNewVehicle', this.onVehicleAdded, this);
    },
    onVehicleAdded: function (vehicle) {
      let vehicleView = new CarView({ model: vehicle });
      this.$el.prepend(vehicleView.render().$el);
    },
    render: function () {
      this.$el.html('');

      let self = this;
      this.model.each(function (vehicle) {
        let vehicleView = new CarView({ model: vehicle });
        self.$el.append(vehicleView.render().$el);
      });
    },
  });

  return CarsView;
});
