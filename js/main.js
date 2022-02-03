// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song,
});

let SongView = Backbone.View.extend({
  tagName: 'li',
  render: function () {
    this.$el.html(this.model.get('title'));
    this.$el.attr('id', this.model.id);
    return this;
  },
});

let SongsView = Backbone.View.extend({
  tagname: 'ul',
  initialize: function () {
    this.model.on('add', this.onSongAdded, this);
    this.model.on('remove', this.onSongRemoved, this);
  },
  onSongAdded: function (song) {
    let songView = new SongView({ model: song });
    this.$el.append(songView.render().$el);
  },
  onSongRemoved: function (song) {
    // this.$el.find('li#' + song.id).remove();
    this.$('li#' + song.id).remove();
  },
  render: function () {
    this.model.each((song) => {
      let songView = new SongView({ model: song });
      this.$el.append(songView.render().$el);
    });
  },
});

let songs = new Songs([
  new Song({ id: 1, title: 'Black Widow' }),
  new Song({ id: 2, title: 'Child Of Vision' }),
  new Song({ id: 3, title: 'Pull me under' }),
]);

let songsView = new SongsView({ el: '#songs', model: songs });
songsView.render();
