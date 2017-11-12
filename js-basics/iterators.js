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

