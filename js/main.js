// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let Animal = Backbone.Model.extend({
  walk: function () {
    console.log("Animal walking...");
  },
});

let Dog = Animal.extend({
  walk: function () {
    Animal.prototype.walk.apply(this);
    console.log("Dog walking...");
  },
});

let dog = new Dog();

dog.walk();
