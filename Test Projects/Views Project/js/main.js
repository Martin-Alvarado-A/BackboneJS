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

let VehicleCollection = Backbone.Collection.extend({
  model: Vehicle,
});

let Car = Vehicle.extend({
  start: function () {
    if (!this.isValid()) {
      console.log(`Cannot start. Error: ${this.validationError}`);
      return;
    }

    console.log(
      `Car with registration number ${this.attributes.registrationNumber} started.`
    );
  },
});
