'use strict';

var dudes = [];

function Dude(age, weight) {
  this.age = age;
  this.weight = weight;
  this.says = function(){
    alert('Careful, man, there\'s a beverage here!');
  };
  dudes.push(this);
}

var objectDudes = JSON.parse(localStorage.dudes);
console.log('these are Objects, not Dudes', objectDudes);
// console.log('the method is gone', objectDudes[0].says());

for(var i = 0; i < objectDudes.length; i++) {
  new Dude(objectDudes[i].age, objectDudes[i].weight);
}

console.log('these are legit Dudes', dudes);
// console.log('Dude instances have the method', dudes[0].says());
