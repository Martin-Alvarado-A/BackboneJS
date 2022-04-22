define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let CarView = Backbone.View.extend({
    tagName: 'li',
    id: '132',
    attributes: {
      'data-color': '',
    },
    events: {
      'click .delete': 'onClickDelete',
    },
    onClickDelete: function (e) {
      this.remove();
    },
    render: function () {
      let template = _.template($('#vehicleTemplate').html());
      let html = template(this.model.toJSON());
      this.$el.html(html);

      return this;
    },
  });

  return CarView;
});
