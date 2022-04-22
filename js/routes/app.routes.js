define([
  'jquery',
  'underscore',
  'backbone',
  '../views/albums.view',
  '../views/artists.view',
  '../views/genres.view',
], function ($, _, Backbone, AlbumsView, ArtistsView, GenresView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      albums: 'viewAlbums',
      'albums/:albumId': 'viewAlbumById',
      artists: 'viewArtists',
      genres: 'viewGenres',
      '*other': 'defaultRoute',
    },
    viewAlbums: function () {
      let view = new AlbumsView({ el: '#container' });
      view.render();
    },
    viewAlbumById: function (albumId) {},
    viewArtists: function () {
      let view = new ArtistsView({ el: '#container' });
      view.render();
    },
    viewGenres: function () {
      let view = new GenresView({ el: '#container' });
      view.render();
    },
    defaultRoute: function () {},
  });

  return AppRouter;
});
