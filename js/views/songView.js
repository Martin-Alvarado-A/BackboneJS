define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  var SongView = Backbone.View.extend({
    render: function () {
      console.log('songview');
      this.$el.html(this.model.get('title'));
      return this;
    },
  });

  return SongView;
});
