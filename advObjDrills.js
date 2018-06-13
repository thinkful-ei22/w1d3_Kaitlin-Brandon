'use strict';
/*
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
    job: 'Healer'
  },

  {
    name: 'Roadhog',
    job: 'Tank'
  },

  {
    name: 'Tracer',
    job: 'Dps'
  }
];

const loopThrough2 = function(obj) {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].name);
    console.log(obj[i].job);
  }
};

loopThrough2(heroes);


//5. Properties that aren't there

let heroes2 = [
  {
    name: 'Mercy',
    job: 'healer',
    boss: 'King Koopa'
  },

  {
    name: 'Roadhog',
    job: 'tank',
    boss: 'King Koopa'
  },

  {
    name: 'Tracer',
    job: 'dps',
    boss: 'King Koopa',
  },

  {
    name: 'King Koopa',
    job: 'boss',
  }
];

const loopThrough3 = function(obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].job !== 'boss'){
      console.log(`${obj[i].job} ${obj[i].name} reports to ${obj[i].boss}.`);
    }
    else {
      console.log(`${obj[i].job} ${obj[i].name} doesn't report to anybody.`);

    }
  }
};

loopThrough3(heroes2);

// 6. 

// Object Cypher

const words = {
  w1: 'craft',
  w2: 'block',
  w3: 'argon',
  w4: 'meter',
  w5: 'bells',
  w6: 'brown',
  w7: 'croon',
  w8: 'droop'
};

// decodeWords that utilizes decode function to accept a single string of words


const decodeWords = function(obj) {
  let result = '';
  for (const key in obj) {
    const value = obj[key];
    if (value[0] === 'a') {
      result+= value[1];
    } else if (value[0] === 'b') {
      result+= value[2];
    } else if (value[0] === 'c') {
      result+= value[3];
    } else if (value[0] === 'd') {
      result+= value[4];
    } else {
      result+= ' ';
    }
  } 
  // return fully decoded message as a string
  console.log(result);
};

decodeWords(words);

*/
//7. Factory Functions with LOTR

function createChar (charName, nickname, race, charOrigin, atk, def) {

  return {
    name: charName,
    nickname: nickname,
    race: race,
    origin: charOrigin,
    attack: atk,
    defense: def,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    
    evaluateFight: function (character){
      let x = this.atk - character.def;
      let y = character.atk - this.def;
      if (character.def > this.atk){
        x = 0;
      }
      if (this.def > character.atk){
        y = 0;
      }
      let damageCalc = `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

const characters = [createChar('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth',10, 6), 
  createChar('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire',2,1), 
  createChar('Frodo Baggins', 'frodo','Hobbit', 'The Shire', 3, 2 ), 
  createChar('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createChar('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createChar('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendall', 14, 2)];


characters.find(function(){
  for (let i=0; i < characters.length; i++){
    if (characters[i].nickname === 'aragorn'){
      characters[i].describe();
    }
  }
});