//Logging array, changing index value
let myArray = ['String 1', 'String 2', 'String 3'];

console.log(myArray);

let listItem = myArray[0];
console.log(listItem);
console.log(myArray[2]);
console.log(myArray[3]);

myArray[1] = 'Replacement string';

// Index of word
let word = "Word";

console.log(word[2]);

//Checking length

let myArray2 = ['String 1', true, 'Another string'];
typeof myArray2;

console.log(myArray2.length);

// Push and pop
myArray.push('String 4', 'String 5');
myArray.pop();
console.log(myArray);

//Playing with slice

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
let groceryList2 = groceryList.slice(3, 6);

console.log(groceryList2);
console.log(groceryList);
