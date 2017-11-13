let something = 1;
let message = 'nothing';

let myObject = {
  prop1: 'String',
  prop2: 23
}

myObject.prop3 = ['thing 1', 'thing 2', 'thing 3'];
myObject.prop3.push('thing 4', 'thing 5');

myObject.myMethod = () => {
	return 'Success!';
};

myObject.myMethod2 = function() {
	return `I like ${this.prop3[2]}!`;
};

if (something = 1) {
	message = myObject.prop3[4];
} else if (something = 3) {
	message = myObject.prop3[0];
} else {
	message = message;
}
	
console.log(myObject[message]);



console.log(myObject);
console.log(myObject.myMethod());
console.log(myObject.myMethod2());
