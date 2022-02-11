let Vehicle = Backbone.Model.extend({
  registrationNumber: 'vehicle id',
  color: 'Vehicle color',

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

let vehicle = new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' });

/* let VehicleCollection = Backbone.Collection.extend({
  model: Vehicle,
});

let vehicles = new VehicleCollection([
  new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' }),
]); */

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
    var $targetElement = $(e.target);

    console.log('deleted', $targetElement);
  },
  render: function () {
    let template = _.template($('#vehicleTemplate').html());
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
});

let vehicleView = new VehicleView({ el: '#container', model: vehicle });
vehicleView.render();
// $('vehicleTemplate').html(vehicleView.render().$el);
