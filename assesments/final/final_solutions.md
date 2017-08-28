# Final Assessment Solutions

## Question 1

```javascript
function product(numStr1, numStr2){
   var num1 = Number(numStr1)
   var num2 = Number(numStr2)
   if (isNaN(num1) || isNaN(num2)){
     return 'please insert two numbers'
   } else {
     return num1 * num2
   }
}
```

## Question 2

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

## Question 3

```javascript
var arr2 = mapArr(arr, function(number){
  return 'the number is: ' + number
})
```

## Question 4

```javascript
function replaceWords(sentence, word, newWord){
  var arr = sentence.split(' ')
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === word) {
      arr[i] = newWord
    }
  }

  return arr.join(' ')
}
```

## Question 5

```javascript
function toggleCompleted(task){
  var toggledTask = createTask(task.description, !task.completed)
  return toggledTask
}
```