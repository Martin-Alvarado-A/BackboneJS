let Vehicle = Backbone.Model.extend({
  registrationNumber: 'vehicle id',
  'data-color': 'Vehicle color',

  start: function () {
    console.log(`Vehicle started.`);
  },

  validate: function (attr) {
    if (!attr.registrationNumber) {
      console.log('Registration id required');
      return 'Registration id required';
    }
  },
});

let VehicleCollection = Backbone.Collection.extend({
  model: Vehicle,
});

let VehicleView = Backbone.View.extend({
  tagName: 'li',
  id: '132',
  attributes: {
    'data-color': "",
  },
  events: {
    'click .delete': 'onClickDelete',
  },
  onClickDelete: function (e) {
    this.remove();
  },
  render: function () {
    let template = _.template($('#vehicleTemplate').html());
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
});

let VehiclesView = Backbone.View.extend({
  tagName: 'ol',
  initialize: function () {
    this.model.on('add', this.onVehicleAdded, this);
  },
  onVehicleAdded: function (vehicle) {
    let vehicleView = new VehicleView({ model: vehicle });
    this.$el.append(vehicleView.render().$el);
  },
  render: function () {
    let self = this;
    this.model.each(function (vehicle) {
      let vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
  },
});

let vehicles = new VehicleCollection([
  new Vehicle({ registrationNumber: 'XLI887', "data-color": 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', "data-color": 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', "data-color": 'Gray' }),
]);

let vehiclesView = new VehiclesView({ el: '#container', model: vehicles });
vehiclesView.render();
