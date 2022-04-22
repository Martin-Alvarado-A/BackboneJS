define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let bus = _.extend({}, Backbone.Events);

  return bus;
});
