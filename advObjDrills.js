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
}

const loopThrough = function(obj) {
  for (const key in obj) {
    console.log(key);
    const value = obj[key];
    console.log(value);
  }
};

loopThrough(testObj);