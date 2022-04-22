define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  let NavView = Backbone.View.extend({
    initialize: function (options) {
      console.log(`🔎 | NavView | initialize`, options);
      this.Router = options.router;
    },
    events: {
      click: 'onClick',
    },
    onClick: function (e) {
      let $li = $(e.target);
      console.log(`🔎 | NavView | onClick: `, $li.attr('data-url'));
      this.Router.navigate($li.attr('data-url'), { trigger: true });
    },
  });

  return NavView;
});
