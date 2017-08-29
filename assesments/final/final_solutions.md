# Final Assessment Solutions

## Question 1

```javascript
function sumTimesTwo(num1, num2){
   return (num1 + num2) * 2
}
```

## Question 2

```javascript
function product(num1, num2){
  if (typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'invalid input'
  } else {
    return num1 * num2
  }
}
```

## Question 3

```javascript
function capEvenLowOdd(str){
  if (str.length % 2 === 0){
    return str.toUpperCase()
  } else {
    return str.toLowerCase()
  }
}
```

## Question 4

```javascript
function cube(num){
  return Math.pow(num, 3)
}
```

## Question 5

```javascript
function updateCounter(counter, action){
  if (action === 'INC'){
    return counter + 1
  } else if (action === 'DEC'){
    return counter - 1
  } else {
    return 0
  }
}
```

## Question 6

```javascript
function arrContains(arr, value){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === value){
      return true
    }
  }
  return false
}
```

## Question 7

```javascript
function replaceSpacesWithCommas(str){
  return str.split(' ').join(',')
}
```

## Question 8

```javascript
function callFunc(arg, callback) {
  return callback(arg)
}
```

## Question 9

```javascript
forEachElem(arr, function(number){
  console.log('the number is: ' + number)
})
```

## Question 10

```javascript
function createTask(title, completed){
  var task = {
    title: title,
    completed: completed
  }

  return task
}
```

## Question 11

```javascript
logAllTasks(){
  forEachElem(taskArr, function(task){
    console.log(task.title + '. Completed: ' + task.completed)
  })
}
```