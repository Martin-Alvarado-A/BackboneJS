define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let NavView = Backbone.View.extend({
    initialize: function (options) {
      this.Router = options.router;
    },
    events: {
      click: 'onClick',
    },
    onClick: function (e) {
      let $li = $(e.target);

      if (!$li.attr('data-url')) {
        return;
      }
      $li.siblings().removeClass('selected');
      $li.addClass('selected');

      this.Router.navigate($li.attr('data-url'), { trigger: true });
    },
  });

  return NavView;
});
