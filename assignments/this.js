/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* Principle 1: Window - Whenever a function is within the global scope, the value of 'this' will be the global 'window' object. Synomynous with using "window." before calling a function.
* Principle 2: Implicit Binding - Whenever a function is preceeded by a dot and called, the object before that dot is what 'this' points to.
* Principle 3: New Binding - When using the 'new' keyword, 'this' refers to the specific instance of an object created and returned using a constructor function.
* Principle 4: Explicit Binding - 'Call' or 'Apply' methods explicitly define 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function food(food, type) {
  console.log(food + ' is a ' + type);
  console.log(this);
}

food('Potato', 'vegetable');

// Principle 2

// code example for Implicit Binding

let foodTypes = {
  middle: ' is a ',
  speak: function(food, type) {
    console.log(food + this.middle + type);
    console.log(this);
  }
}

foodTypes.speak('Pineapple', 'fruit');

// Principle 3

// code example for New Binding

function TypeOfFood(food, type) {
  this.middle = ' is a ';
  this.food = food;
  this.type = type;
  this.speak = function() {
    console.log(this.food + this.middle + this.type);
    console.log(this);
  }
}

var mango = new TypeOfFood('Mango', 'fruit');
var celery = new TypeOfFood('Celery', 'vegetable');

mango.speak();
celery.speak();

// Principle 4

// code example for Explicit Binding

mango.speak.call(celery);
celery.speak.apply(mango);
