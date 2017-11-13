let myObject = {
  prop1: 'String',
  prop2: 23
}

myObject.prop3 = ['thing 1', 'thing 2', 'thing 3'];
myObject.prop3.push('thing 4', 'thing 5');

myObject.myMethod = () => {
	return 'Success!';
};


console.log(myObject);
console.log(myObject.myMethod());
