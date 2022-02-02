// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let SongView = Backbone.View.extend({
  events: {
    click: "onClick",
    "click .bookmark": "onClickBookmark",
  },
  onClick: () => {
    console.log("This");
  },
  onClickBookmark: event => {
    event.stopPropagation();
    console.log("bookmarked");
  },
  render: function () {
    this.$el.html(
      this.model.get("title") +
        "<button>Listen</button> <button class='bookmark'>Bookmark</button>"
    );
    return this;
  },
});

let song = new Song({ title: "Child of vision" });

let songView = new SongView({ el: "#container", model: song });

songView.render();
