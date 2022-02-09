define(['underscore', 'models/songModel', 'views/songView'], function (
  _,
  Song,
  SongView
) {
  let Initialize = function () {
    var song = new Song({ title: 'blue in Green' });

    var songView = new SongView({ el: '#container', model: song });

    songView.render();
  };

  return {
    initialize: Initialize,
  };
});
