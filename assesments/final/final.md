# Final Assessment

1. Write a function `sumTimesTwo` that takes two numbers as arguments and returns the sum of these numbers multiplied by `2`.

2. Write a function `product` that takes two numbers as arguments and returns their product. If either of the arguments is not of type number, the function should return `invalid input`

```js
product(1, 2)
// returns 2
product(3, 'dog')
// returns 'invalid input'
```

3. Write a function `capEvenLowOdd` that takes a string as input. If the string has an even number of letters the function will return the string in all uppercase letters. If the string has an odd number of letters the function will return the string in all lowercase letters.

```js
capEvenLowOdd('DOG')
// returns 'dog'
capEvenLowOdd('woof')
// returns 'WOOF'
```

4. The `Math.pow` function takes two numbers as arguments, and returns the first to the power of the second. For example,

```js
Math.pow(3, 2)
// returns 9
```

Create a function called `cube` that takes a number as argumemt and uses the `Math.pow` function to return that number to the power of `3`.

```js
cube(3)
// returns 27
```

5. Write a function `updateCounter` that takes as arguments a number `counter` and a string `action`. If the string's value is `'INC'` the function will return the  value of the counter plus 1. If the string's value is `'DEC'`, the function will return the value of the counter minus 1. If the string's value is neither of these, the function will return `0`.

```js
updateCounter(1, 'INC')
// will return 2
updateCounter(4, 'DEC')
// will return 3
updateCounter(10, 'hello')
// will return 0
```

6. Write a function called `arrContains` that takes two arguments: an array and a value. The function will return `true` if the value is in the array, and `false` otherwise. You may not use any built-in array methods.

Examples:

```js
arrContains([1,2,3,4], 2)
// returns true
arrContains([1,2,3,4], 'dog')
// returns false
```

7. Write a function `replaceSpacesWithCommas` that takes a string as an argument, and returns the string with all the spaces replaces by commas.

```js
replaceSpacesWithCommas('hello there stranger')
// returns 'hello,there,stranger'
```

8. Fill in the blank:

```js
function exclaim(str) {
  return str + "!"
}

function callWithArg(callback, arg) {
  ____________
}

callWithArg(exclaim, 'hello')
// returns 'hello!'
```

9. You are given a function called `forEachElem`:

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

10. Complete the function `createTask`

```js
function createTask(title, completed){






}

createTask('buy milk', false)
// will return {title: 'buy milk', completed: false }
createTask('walk dog', true)
// will return {title: 'walk dog', completed: true }

```

11. Bonus: Complete the function logAllTasks:

```js
forEachElem(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}

var taskArr = [
  {title: 'buy milk', completed: false}
  {title: 'walk dog', completed: true}
]

logAllTasks(){
  forEachElem(taskArr, ___________
  ________________________________
  ______)
}

logAllTasks(taskArr)
// will log:
// buy milk. Completed: false
// walk dog. Completed: true
```