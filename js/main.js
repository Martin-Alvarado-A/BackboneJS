// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let SongView = Backbone.View.extend({
  tagName: "span",
  className: "song",
  id: "1234",
  attributes: {
    "data-genre": "Jazz",
  },
  render: function () {
    this.$el.html("Hello world");

    return this;
  },
});

// var songView = new SongView({ el: "#container" }); // instantiate right away
var songView = new SongView();
// songView.render(); // render the view

$("#container").html(songView.render().$el); // instanciate via selector and render it right away
