
// 1

function product(numStr1, numStr2){
   var num1 = Number(numStr1)
   var num2 = Number(numStr2)
   if (isNaN(num1) || isNaN(num2)){
     return 'please insert two numbers'
   } else {
     return num1 * num2
   }
}

// 2

function arrContains(arr, value){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === value){
      return true
    }
  }
  return false
}

// 3

function mapArr(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}

var arr = [2, 3, 4]
var arr2 = mapArr(arr, function(number){
  return 'the number is: ' + number
})

console.log(arr2)


// 4

function replaceWords(sentence, word, newWord){
  var arr = sentence.split(' ')
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === word) {
      arr[i] = newWord
    }
  }
  
  return arr.join(' ')
}

// 5

function createTask(description, completed){
  var task = {
    description: description,
    completed: completed
  }
  return task
}

function toggleCompleted(task){
  var toggledTask = createTask(task.description, !task.completed)
  return toggledTask
}


// var buyMilk = createTask('buy milk', false)
// console.log(buyMilk)
// console.log(toggleCompleted(buyMilk))
