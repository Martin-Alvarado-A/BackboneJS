// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song,
});

let SongView = Backbone.View.extend({
  tagName: "li",
  render: function () {
    this.$el.html(this.model.get("title"));
    return this;
  },
});

let SongsView = Backbone.View.extend({
  render: function () {
    this.model.each(song => {
      let songView = new SongView({ model: song });
      this.$el.append(songView.render().$el);
    });
  },
});

let songs = new Songs([
  new Song({ title: "Black Widow" }),
  new Song({ title: "Child Of Vision" }),
  new Song({ title: "Pull me under" }),
]);

let songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();
