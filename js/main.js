// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song,
});

let songs = new Songs();

songs.add(
  new Song({
    title: "Song 1",
    genre: "Jazz",
    downloads: 110,
  }),
  { at: 0 }
);

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

let jazzSongs = songs.where({ genre: "Jazz" });
let firstJazzSong = songs.findWhere({ genre: "Jazz" });

console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Songs", firstJazzSong);

let filteredSongs = songs.where({ genre: "Jazz" }, { title: "Song 2" });
console.log("Filtered Songs", filteredSongs);

let topDownloads = songs.filter(song => song.get("downloads") > 100);
console.log("Top Songs", topDownloads);
