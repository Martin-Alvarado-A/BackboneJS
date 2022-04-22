define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let HomeView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | HomeView | render`);
      this.$el.html('Hello world!');
      return this;
    },
  });

  return HomeView;
});
