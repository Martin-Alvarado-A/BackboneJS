// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
  },
});

var song = new Song();
if (!song.isValid()) {
  console.log("Error description: ", song.validationError);
}

song = new Song({ title: "Rock 'n Roll Widow" });
if (song.isValid()) {
  console.log("Song title: ", song.attributes.title);
}
