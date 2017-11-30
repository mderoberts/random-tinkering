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

// Argument loop with conditions and prompts

function argLoop2(x, y, z) {
    for (i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i]);
			if (typeof arguments[i] == 'string') {
				alert("It's a string!");
            } else if (typeof arguments[i] == 'number') {
prompt('It was a number! Type something else!'); 
            } else if (typeof arguments[i] == 'boolean') {
confirm('Are you sure?');
            }
    }
}

argLoop2('Thursday', 2, true);

// Vowel checker (needs true vowel loop fix)

let vowelChecker = (x) => {
          let vowels = ['a', 'e', 'i', 'o', 'u'];
            vowels.forEach(vowel => {
              if (x == vowel) {
                console.log(`${x} is a vowel!`);
              } else {
                console.log(`${x} is not a vowel!`);
              }
            });
        };

