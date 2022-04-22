let Vehicle = Backbone.Model.extend({
  registrationNumber: 'vehicle id',
  'data-color': 'Vehicle color',

  start: function () {
    console.log(`Vehicle started.`);
  },

  validate: function (attr) {
    let regNum = attr.registrationNumber;
    if (!regNum || regNum.length == 0) {
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
    'data-color': '',
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
  initialize: function (options) {
    this.bus = options.bus;
    this.model.on('add', this.onVehicleAdded, this);
    this.bus.on('addNewVehicle', this.onVehicleAdded, this);
  },
  onVehicleAdded: function (vehicle) {
    let vehicleView = new VehicleView({ model: vehicle });
    this.$el.prepend(vehicleView.render().$el);
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
  new Vehicle({ registrationNumber: 'XLI887', 'data-color': 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', 'data-color': 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', 'data-color': 'Gray' }),
]);

var bus = _.extend({}, Backbone.Events);

let NewVehicleView = Backbone.View.extend({
  tagName: 'span',
  initialize: function (options) {
    this.bus = options.bus;
  },

  events: {
    'click .add': 'onAdd',
  },

  onAdd: function (e) {
    var val = $('#addVehicle').val();
    if (val.length === 0) return;

    let newCar = new Vehicle({ registrationNumber: val });
    this.bus.trigger('addNewVehicle', newCar);
    $('#addVehicle').val('');
  },

  render: function () {
    let template = _.template($('#listActionsTemplate').html());
    let html = template();
    this.$el.html(html);

    return this;
  },
});

let newVehicleView = new NewVehicleView({ el: '#listActions', bus: bus });
newVehicleView.render();

let vehiclesView = new VehiclesView({ el: '#list', model: vehicles, bus: bus });
vehiclesView.render();
