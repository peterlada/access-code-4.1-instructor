var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function calcResult(num1, num2, operation){
  var result
  if (operation === '+'){
    return num1 + num2
  } else if (operation === '-'){
    return num1 - num2
  } else if (operation === '*') {
    return num1 * num2
  } else if (operation === '/') {
    return num1 / num2
  } else {
    return 0
  }
}

var operations = ['+', '-', '*', '/']

rl.on('line', function (input) {
  clear()
  var arr = input.split(' ')
  var operation = arr[0]
  var num1 = Number(arr[1])
  var num2 = Number(arr[2])
  
  if (!operations.includes(operation)){
    console.log('invalid operation')
  } else if (isNaN(num1) || isNaN(num2)){
    console.log('you must enter two numbers ')
  } else {
    var result = calcResult(num1, num2, operation)
    console.log(result)
  }
  console.log('insert an operation followed by two numbers')
})

clear()
console.log('insert an operation followed by two numbers')