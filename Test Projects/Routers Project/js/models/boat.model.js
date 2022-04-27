define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let Boat = Backbone.Model.extend({
    registrationName: 'Boat Name',

    start: function () {
      console.log(`Boat started.`);
    },

    validate: function (attr) {
      let regName = attr.registrationName;
      if (!regName || regName.length == 0) {
        console.log('Registration name required');
        return 'Registration name required';
      }
    },
  });

  return Boat;
});
