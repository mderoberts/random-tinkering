// Push prompt responses to empty array

let answers = [];

let questions = () => {
	let response = prompt('Type something.');
	answers.push(response);
};

let question2 = () => {
	answers.push(prompt('Type something else.'));
};

questions();
question2();
console.log(answers);

// Looping through arguments (ES5)

function argLoop(x, y, z) {
    for (i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i]);
    }
}

argLoop(1, 'word', true);
