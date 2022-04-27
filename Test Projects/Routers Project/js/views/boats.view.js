define(['jquery', 'underscore', 'backbone', './boat.view'], function (
  $,
  _,
  Backbone,
  BoatView
) {
  let BoatsView = Backbone.View.extend({
    tagName: 'ol',
    initialize: function (options) {
      this.bus = options.bus;
      this.model.on('add', this.onBoatAdded, this);
      this.bus.on('addNewBoat', this.onBoatAdded, this);
    },
    onBoatAdded: function (boat) {
      let boatView = new BoatView({ model: boat });
      this.$el.prepend(boatView.render().$el);
    },
    render: function () {
      this.$el.html('');

      let self = this;
      this.model.each(function (boat) {
        let boatView = new BoatView({ model: boat });
        self.$el.append(boatView.render().$el);
      });
    },
  });

  return BoatsView;
});
