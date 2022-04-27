define(['jquery', 'underscore', 'backbone', '../models/boat.model'], function (
  $,
  _,
  Backbone,
  Boat
) {
  let BoatCollection = Backbone.Collection.extend({
    model: Boat,
  });

  let boats = new BoatCollection([
    new Boat({ registrationName: 'Lorem Ipsum' }),
    new Boat({ registrationName: 'Amed' }),
    new Boat({ registrationName: 'Dolor sit' }),
  ]);

  return boats;
});
