// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend({
  defaults: {
    listeners: 0,
  },
});

let SongView = Backbone.View.extend({
  initialize: function () {
    this.model.on("change", this.onModelChange, this);
  },
  onModelChange: function () {
    this.$el.addClass("someClass");
  },
  render: function () {
    this.$el.html(
      this.model.get("title") + "- Listeners: " + this.model.get("listeners")
    );
    return this;
  },
});

let song = new Song({ title: "Child of vision" });

let songView = new SongView({ el: "#container", model: song });

songView.render();
