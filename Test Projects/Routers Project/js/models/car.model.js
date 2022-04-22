define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
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

  return Vehicle;
});
