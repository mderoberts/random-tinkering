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
