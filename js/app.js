var song = new Song({ title: 'blue in Green' });

var songView = new SongView({ el: '#container', model: song });

songView.render();
