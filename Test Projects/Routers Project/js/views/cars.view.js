define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let CarsView = Backbone.View.extend({
    render: function () {
      this.$el.html('Hello Cars!');
      return this;
    },
  });

  return CarsView;
});
