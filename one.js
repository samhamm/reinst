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

new Dude(24, 155);
new Dude(44, 366);

localStorage.dudes = JSON.stringify(dudes);
