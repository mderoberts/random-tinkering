let message = ['Hello', 'I love you', "won't you", 'tell me', ]
message.push('your name?');

// message.forEach(phrase => console.log(phrase));

let message2 = [message[0], message[1], 'let me jump in your game?'];

// message2.forEach(phrase => console.log(phrase));

const verse1 = () => {
	message.forEach(phrase => console.log(phrase));
	message2.forEach(phrase => console.log(phrase));
};

verse1();
