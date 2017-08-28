# Final Assessment - Another Draft

1. Write a function `product` that takes two string as arguments. The function will attempt to convert the strings to numbers, and return the product of the two numbers. If the convertion returns NaN for either string, the function should return a string: `'please insert two numbers'`.

```javascript
product(1, 2) // returns 2
product('dog', 'hello') // returns 'please insert two numbers'
product('cat', 3) // returns 'please insert two numbers'
```

2. Write a function called `arrContains` that takes two arguments: an array, and an value. The function should return `true` if the array contains the given value, and `false` otherwise. You may not use any built-in array method - make a loop to check every element of the array.

Examples:

```javascript
arrContains([1,2,3,4], 2);     // returns true
arrContains([1,2,3,4], 5);     // returns false
arrContains(['cat', 'giraffe', 'wolf'], 'dog'); // returns false
```

3. You are given a function called `mapArr` that takes as arguments an array and a callback function. `mapArr` applies the callback on each element of the given array, and returns these values in a new array.
For example:

```js
function mapArr(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}
```

Complete the following code using `mapArr`:

```js
arr1 = [3, 4, 5]
arr2 = mapArr(_________________
_______________________________
_)
console.log(arr2)
// will log:
// ['the number is: 3', 'the number is: 4', 'the number is: 5']
```

4. Write a function `replaceWords` that takes three strings as arguments: `sentence`, `word` and `newWord`. The function will return a new string that is identical to `sentence`, except that all occurences of `word` are replaced by `newWord`. You may use the built-in string method `split` and the built-in array method `join`. You may not use any other built-in methods.

Examples:

```js
var sentence = 'I have two dogs and three cats'
replaceWords(sentence, 'dogs', 'giraffes')
// will return 'I have two giraffes and three cats'
replaceWords(sentence, 'cats', 'geese')
// will return 'I have two dogs and three geese'
```

5. You are given the following code:

```js
function createTask(description, completed){
  var task = {
    description: description,
    completed: completed
  }
  return task
}
```

Complete the function `toggleCompleted`:

```js
function toggleCompleted(task){
  var task = createTask(______________)
  return task
}

var buyMilk = createTask('buy milk', false)
console.log(buyMilk)
// Will log: { description: 'buy milk', completed: false }
console.log(toggleCompleted(buyMilk))
// Will log: { description: 'buy milk', completed: true }

var walkDog = createTask('walk dog', true)
console.log(toggleCompleted(walkDog))
// Will log: { description: 'walk dog', completed: false }
```