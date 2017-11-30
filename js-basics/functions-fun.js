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
