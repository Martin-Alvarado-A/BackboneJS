define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let AlbumsView = Backbone.View.extend({
    render: function () {
      console.log(`🔎 | AlbumsView | render`);
      this.$el.html('ALBUMS VIEW');
      return this;
    },
  });

  return AlbumsView;
});
