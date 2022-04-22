define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let CarsView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | CarsView | render`);
      this.$el.html('Hello Cars!');
      return this;
    },
  });

  return CarsView;
});
