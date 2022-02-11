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

/* 
let vehicles = new VehicleCollection([
  new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' }),
]);
 */

let vehicles = new VehicleCollection([]);
vehicles.add(new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }));
vehicles.add(new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }));
vehicles.add(new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' }));

let blueCars = vehicles.where({ colour: 'Blue' });
console.log(blueCars);

let specialCar = vehicles.findWhere({ registrationNumber: 'XLI887' });
console.log(specialCar);
vehicles.remove(specialCar);

let vehiclesJson = vehicles.toJSON();

vehiclesJson.forEach((vehicle) => {
  console.log(vehicle);
});
