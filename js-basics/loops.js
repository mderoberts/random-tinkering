// Backward for loop

let favoriteSpots = ['Spot 1', 'Spot 2', 'Spot 3'];

for (let favoriteSpotIndex = favoriteSpots.length - 1; favoriteSpotIndex >= 0; favoriteSpotIndex--) {
  console.log('I would love to go to ' +  favoriteSpots[favoriteSpotIndex]);
}

// Nested for loop -- forward

let myThings = ['Thing 1', 'Thing 2', 'Thing 3'];

let friendThings = ['Thing 3', 'Thing 4', 'Thing 5'];

for (let myThingsIndex = 0; myThingsIndex < myThings.length; myThingsIndex++) {
  
  for (let friendThingsIndex = 0; friendThingsIndex < friendThings.length; friendThingsIndex++) {
    if (myThings[myThingsIndex] === friendThings[friendThingsIndex]) {
      console.log(myThings[myThingsIndex]);
    }
  }
}

// Nested for loop backward

let myThings = ['Thing 1', 'Thing 2', 'Thing 3'];

let friendThings = ['Thing 3', 'Thing 4', 'Thing 5'];

for (let myThingsIndex = myThings.length - 1; myThingsIndex >= 0; myThingsIndex--) {
  
  for (let friendThingsIndex = friendThings.length - 1 ; friendThingsIndex >= 0; friendThingsIndex--) {
    if (myThings[myThingsIndex] === friendThings[friendThingsIndex]) {
      console.log(myThings[myThingsIndex]);
    }
  }
}

// While loop

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';

while (currentCard != 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('Success! You flipped a Spade!');
