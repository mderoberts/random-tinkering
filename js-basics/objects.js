let something = '1';
let message = 'prop2';

let myObject = {
  prop1: 'String',
  prop2: 23
};

myObject.prop3 = ['thing 1', 'thing 2', 'thing 3'];
myObject.prop3.push('thing 4', 'thing 5');

myObject.myMethod = () => {
	return 'Success!';
};

myObject.myMethod2 = function() {
	return `I like ${this.prop3[2]}!`;
};

something = 1;

if (typeof something === 'number') {
    //   message = myObject.prop3[4];
    message = 'prop1';
} 
	
console.log(myObject[message]);
console.log(typeof something);
// console.log(myObject.prop3[4]);
console.log(myObject.prop3);




console.log(myObject);
console.log(myObject.myMethod());
console.log(myObject.myMethod2());
