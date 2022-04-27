define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let BoatView = Backbone.View.extend({
    tagName: 'li',
    id: '132',
    events: {
      'click .delete': 'onClickDelete',
    },
    onClickDelete: function (e) {
      this.remove();
    },
    render: function () {
      let template = _.template($('#boatTemplate').html());
      let html = template(this.model.toJSON());
      this.$el.html(html);

      return this;
    },
  });

  return BoatView;
});
