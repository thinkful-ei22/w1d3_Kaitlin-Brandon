'use strict';

// 1. Object Initializers and Methods

const loaf = {
  flour: 300,
  water: 210,

  hydration (){
    return (this.water/this.flour)*100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

// 2. Iterating over an object's properties

const testObj = {
  foo: 'hm',
  bar: 'oh',
  fum: 'look',
  quux: 'listen',
  spam: 'see'
};

const loopThrough = function(obj) {
  for (const key in obj) {
    console.log(key);
    const value = obj[key];
    console.log(value);
  }
};

loopThrough(testObj);

//3. Arrays in Objects

const obj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'afternoon tea', 'dinner', 'supper'],
};

console.log (obj.meals[3]);

// 4. Arrays of objects


let heroes = [
  {
    name: 'Mercy',
    job: 'healer'
  },

  {
    name: 'Roadhog',
    job: 'tank'
  },

  {
    name: 'Tracer',
    job: 'dps'
  }
];

const loopThrough2 = function(obj) {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].name);
    console.log(obj[i].job);
  }
};

loopThrough2(heroes);