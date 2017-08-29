### Variables
1. Identify the incorrect variable name.
	1. `myVariable`
	2. `my_variable`
	3. `myVariable!`
	4. `$myVariable`	
2. Identify the incorrect declaration and assignment.
	1. `let x = 8`
	2. `let x = (8 + 15) / 2`
	3. `let foo = michaeljackson`
	4. `let foo = 'michaeljackson'`
	
### Values, Types, and Operators
1. `'Tom' === 'Jerry'`
	1. `true`
	2. `false`
2. `!true`
	1. `true`
	2. `false`
3. `false || true`
	1. `true`
	2. `false`
4. `typeof( 5 )`
	1. number
	2. string
	3. object
5. What is the difference between '1' and 1?
6. Complete the following truth table.
```
|  A    |  B    | !B    | A && !B |
+-------+-------+-------+---------+
| false | false |       |         |
| false | true  |       |         |
| true  | false |       |         |
| true  | true  |       |         |
```

### Conditionals
1. What is logged by the following code?
```js
if (1 > 2) {
	console.log('Oh no, numbers have stopped working!')
} else {
	console.log('1 is not greater than 2.')
}
```
	1. `Oh no, numbers have stopped working!`
	2. `1 is not greater than 2.`
	3. `trick answer do not pick this answer`
2. What is logged by the following code?
```
let rice = 'basmati';
if (rice === 'sticky') {
	console.log('Let\'s make pudding!');
} else if (rice === 'basmati') {
	console.log('We shall cook biryani.');
} else if (rice === 'valencia') {
	console.log('It is paella time!');
} else {
	console.log('The world of rice is vast.');
}
```
	1. `Let's make pudding!`
	2. `We will cook saag paneer.`
	3. `It is paella time!`
	4. `The world of rice is vast.`
3. What is logged by the following code? (HINT: Read closely.)
```
let x = 12;
if (x % 3 === 0) {
	console.log('coffee');
} else if (x % 6 === 0) {
	console.log('donut');
} else {
	console.log('i am still quite hungry');
}
```
	1. `coffee`
	2. `donut`
	3. `i am still quite hungry`

### Functions
1. What happens when you run the following code?
```js
function iLoveCandy( ) {
	console.log("I love candy! I LOVE CANDY IT IS GOOD!");
}
```
	1. `I love candy! I LOVE CANDY IT IS GOOD!`
	2. `undefined`
	3. The function is defined but there is no output because
	it is never invoked.
2. What happens when you run the following code?
```js
function add(num1, num2){
	return num1 + num2
}
let foo = 2
let bar = 3
let sum = add(foo, bar)
console.log(sum)
```
	1. `NaN`
	2. `10`
	3. `5`
3. What happens when you run the following code?
```js
function minusTen( iceCreamBar ) {
	if (typeof( iceCreamBar ) !== 'number') {
		return NaN;
	}
	return iceCreamBar - 10;
}
console.log( minusTen( 20 ) );
```
	1. `NaN`
	2. `10`
	3. `5`
4. What happens when you run the following code?
```js
function minusTen( iceCreamBar ) {
	if (typeof( iceCreamBar ) !== 'number') {
		return NaN
	}
	return iceCreamBar - 10;
}
console.log( minusTen( 'granolaBar' ) );
```
	1. `NaN`
	2. `10`
	3. `5`
	
### Loops
1. What part of the following for loop is the *initialization*?
```js
for (let i = 0; i <= 10; i += 1) {
	console.log('I have ' + i ' coconuts!');
}
```
	1. `let i = 0`
	2. `i <= 10`
	3. `i += 1`
2. What part of the following for loop is the *condition*?
```js
for (let i = 0; i <= 10; i += 1) {
	console.log('I have ' + i ' toes on my feet!');
}
```
	1. `let i = 0`
	2. `i <= 10`
	3. `i += 1`
3. What part of a for loop is the *body*, which is executed
for each *step* of the loop?
	1. The part between parenthesis.
	2. The part between curly braces ie `{}`.
	3. What are curly braces?
	
### Strings and Arrays
1. Given that a string is an *array-like* object, how can we
use an index to access the second character of the string
literal `'backpack'`?
	1. `'backpack'[1]`
	2. `'backback'.length`
	3. `'backpack' * Infinity`
2. `console.log( 'backpack'.slice(2) );`
	1. `ba`
	2. `ckpack`
	3. `ackpack`
3. `console.log( ['a', 'b', 'c', 'd'].length );`
	1. `3`
	2. `4`
	3. `5`
4. `console.log( ['a', 'b', 'c', 'd'].join('-') )`
	1. `undefined`
	2. `-abcd-`
	3. `a-b-c-d`
5. `console.log( '* 22 900'.split(' ') );`
	1. `['*', '22', '900']`
	2. `NaN`
	3. `['*', ' ', '2', '2', ' ', '9', '0', '0']`
	
### Objects
1. What is the output of the following code?
```js
let person = {
  firstName: 'Erika',
  lastName: 'Kim',
  age: 25
}
console.log( person.firstName );
```
	1. `Kim`
	2. `undefined`
	3. `Juan Ponce de Leon`
2. What is the output of the following code?
```js
let person = {
  firstName: 'Erika',
  lastName: 'Kim',
  age: 25
}
person.lastName = 'Nguyen';
console.log( person.lastName );
```
	1. `Kim`
	2. `Nguyen``
	3. `Butch Cassidy`
3. What is the output of the following code?
```js
let person = {
  firstName: 'Erika',
  lastName: 'Kim',
  age: 25
}
console.log( person.age * 2 );
```
	1. `25`
	2. `50`
	3. `NaN`

### Callbacks
1. What is the output of the following code?
```js
function happySeal(x, y) {
	return "I ate " + (x + y) + " fishes!";
}
function call(arg1, arg2, callback){
	return callback(arg1, arg2);
}
call(2, 4, happySeal);
```
	1. `I ate 6 fishes!`
	2. `6`
	3. `I ate undefined fishes!`
2. What is the output of the following code?
```js
function mapArr(arr, cb) {
	let newArr = [];
	for (let i = 0; i < arr.length; i += 1) {
		newArr.push( cb( arr[i] ) );
	}
	return newArr;
}
let jellyBean = mapArr( [1, 2, 3, 4], function(x) {
	return (x * 100);
})
console.log( jellyBean );
```
	1. `1234`
	2. `[]`
	3. `NaN`
	4. `[100, 200, 300, 400]``