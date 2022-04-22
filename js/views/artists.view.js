define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let ArtistsView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | ArtistsView | render`);
      this.$el.html('ARTISTS VIEW');
      return this;
    },
  });

  return ArtistsView;
});
