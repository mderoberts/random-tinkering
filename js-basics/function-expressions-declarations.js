// Function declaration
function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(10, 5));

// Function expression w/ arrow function
const isGreaterThan = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(10, 5));

// Arrow function as concise body

const square = number => number * number;

console.log(`The square of 5 is ${square(5)}.`); 
