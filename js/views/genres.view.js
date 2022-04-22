define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let GenresView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | GenresView | render`);
      this.$el.html('GENRES VIEW');
      return this;
    },
  });

  return GenresView;
});
