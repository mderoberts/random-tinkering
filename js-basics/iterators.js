// forEach method

let things = ['thing 1', 'thing 2', 'thing 2', 'thing 2'];

things.forEach(function(thing) {
    console.log(`I want to buy a ${thing}.`);
});

// forEach w/ =>

let things = ['thing 1', 'thing 2', 'thing 2', 'thing 2'];

things.forEach(thing => console.log(`I want to buy a ${thing}.`));

// forEach to all caps, return undefined


let fruits = ['mango', 'papaya', 'pineapple', 'apple'];


let newFruits = fruits.forEach(fruit => console.log(fruit.toUpperCase()));

console.log(newFruits);

// forEach push to empty array

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});

console.log(copy);

// map method

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

let secretMessage = animals.map(function(letter) {
    return letter[0];
});

console.log(secretMessage.join(''));
