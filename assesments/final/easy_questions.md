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
