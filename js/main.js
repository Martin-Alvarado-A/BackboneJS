// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song,
});

let songs = new Songs([
  new Song({ title: "Song 1" }),
  new Song({ title: "Song 2" }),
  new Song({ title: "Song 3" }),
]);

songs.add(new Song({ title: "Song 4" }));
