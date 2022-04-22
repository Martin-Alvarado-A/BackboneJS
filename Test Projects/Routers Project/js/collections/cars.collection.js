define(['jquery', 'underscore', 'backbone', '../models/car.model'], function (
  $,
  _,
  Backbone,
  Vehicle
) {
  let VehicleCollection = Backbone.Collection.extend({
    model: Vehicle,
  });

  let vehicles = new VehicleCollection([
    new Vehicle({ registrationNumber: 'XLI887', 'data-color': 'red' }),
    new Vehicle({ registrationNumber: 'ZNP123', 'data-color': 'blue' }),
    new Vehicle({ registrationNumber: 'XUV456', 'data-color': 'gray' }),
  ]);

  return vehicles;
});
