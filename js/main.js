// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
});

let song = new Song();
