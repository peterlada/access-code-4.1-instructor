# Final Assessment - A Draft

1. Write a function `product` that takes two numbers and returns their product. If either of the arguments is not a number, the function should return `-1`

> Topics: arguments, mathematical operators, types

```js
product(1, 2) // returns 2
product(3, 'dog') // returns -1
product(0, 2) // returns 0
product(1) // returns -1
```

2. Write a function called `contains` that takes two arguments: an array, and an element to search for within that array. The function should return `true` if the element is within the array, and `false` otherwise. You cannot use the built-in array method `.includes()` - you must construct your own loop and iterate and check each element.

> Topics: loops, conditionals, booleans

Examples:

```javascript
contains([1,2,3,4], 2)
// returns true
contains([1,2,3,4], 1)
// returns true
contains([1,2,3,4], 5)
// returns false
contains([1,2,3,4], 'dog')
// returns false
```

3. Write a function that takes a string as input. If the string has an even number of letters the function will  return the string in all upper-case letters. If the string has an odd number of letters the function should the string in all lower-case letters.

> Topics: modulo function, strings

Examples:

```js
upperOrLowerCase('EvEn')
// returns 'EVEN'
uppperOrLowerCase('oDd')
//returns 'odd'
```

4. Write a function `insertDashes` that takes a string as input, and returns a copy of the string with dashes after each letter. You may not use any built-in string methods.

> Topics: Strings, Loops

Example:

```js
insertDashes("cat")
// returns "c-a-t-"
```

5. Command Line
Word Bank: `ls`, `cd ..`, `cd`, `pwd`, `touch`, `mkdir` <br>
__________ A. creates new file <br>
__________ B. navigates to a certain directory <br>
__________ C. prints the entire file path <br>
__________ D. creates new folder <br>
__________ E. prints the contents of the current folder <br>
__________ F. navigates upwards <br>

6. Callbacks. Complete the code below.

```js
function exclaim(str) {
  return str + "!"
}

function apply(sentence, callback) {
  ____________
}

console.log(apply("hello", exclaim))
// returns "hello!"
```