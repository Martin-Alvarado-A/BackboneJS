// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let person = {
  name: 'Mosh',
  walk: function () {
    this.trigger('walking', {
      speed: 1,
      startTime: '08:00',
    });
  },
};

_.extend(person, Backbone.Events);

person.once('walking', function (e) {
  console.log('Im walkin here!');
  console.log('event args: ', e);
});

person.walk();
