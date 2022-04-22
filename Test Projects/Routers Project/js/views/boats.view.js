define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let BoatsView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | BoatsView | render`);
      this.$el.html('Hello Boats!');
      return this;
    },
  });

  return BoatsView;
});
