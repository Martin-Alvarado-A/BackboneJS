define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let HomeView = Backbone.View.extend({
    render: function () {
      this.$el.html('Hello world!');
      return this;
    },
  });

  return HomeView;
});
