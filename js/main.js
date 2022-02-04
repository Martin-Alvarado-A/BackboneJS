// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let SongView = Backbone.View.extend({
  render: function () {
    let template = _.template($('#songTemplate').html());
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },
});

let song = new Song({ id: 1, title: 'Pull me under', plays: 1100 });

let songView = new SongView({ el: '#songs', model: song });
songView.render();
