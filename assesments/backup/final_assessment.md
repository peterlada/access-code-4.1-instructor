# Final Assessment - A Draft

1. Write a function `sum` that takes two numbers as arguments and returns the sum of these numbers.

2. Write a function `product` that takes two numbers as arguments and returns their product. If either of the arguments is not of type number, the function should return `invalid input`

```js
product(1, 2)
// returns 2
product(3, 'dog')
// returns 'invalid input'
```

3. Write a function `capEvenLowOdd` that takes a string as input. If the string has an even number of letters the function will return the string in upper-case letters. If the string has an odd number of letters the function will the string in lower-case letters.

```js
capEvenLowOdd('DOG')
// returns 'dog'
capEvenLowOdd('woof')
// returns 'WOOF'
```

3. The `Math.pow` function takes two numbers as arguments, and returns the first to the power of the second. For example,

```js
Math.pow(3, 2)
// returns 9
```

Create a function called `cube` that takes a number as argumemt and uses the `Math.pow` function to return that number to the power of `3`.

```js
cube(3)
// returns 27
```

4. Write a function `updateCounter` that takes as arguments a number and a string. If the string's value is `'INC'` the function will return the  value of the counter plus 1. If the string's value is `'DEC'`, the function will return the value of the counter minus 1. If the string's value is 'RES', the function will return `0`.

```js
updateCounter(1, 'INC')
// will return 2
updateCounter(4, 'DEC')
// will return 3
updateCounter(10, 'RES')
// will return 0
```

5. Write a function called `contains` that takes two arguments: an array, and an element to search for within that array. The function will return `true` if the element is in the array, and `false` otherwise. You may not use any built-in array methods.

Examples:

```js
contains([1,2,3,4], 2)
// returns true
contains([1,2,3,4], 'dog')
// returns false
```

6. Write a function `wordInString` that takes as argument a sentence and a word. The function returns `true` if the word is in the string, and false otherwise. You may assume the sentence has no punctuation marks, and all words are separated by spaces.

```js
wordInString('who let the dogs out', 'dogs')
// returns true
wordInString('I believe I can fly', 'soar')
// returns false
```

7. Fill in the blank:

```js
function exclaim(str) {
  return str + "!"
}

function callFunc(arg, callback) {
  ____________
}

apply("hello", exclaim)
// returns 'hello!'
```

8. You are given a function called `forEachElem`:

```js
function forEachElem(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}
```

Complete the following code using `forEachElem`:

```js
arr = [3, 4, 5]
forEachElem(arr,_________________
_______________________________
_)
// will log:
// 'the number is: 3'
// 'the number is: 4'
// 'the number is: 5'
```
