var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

/**
 * @function calcResult
 * @param  {number} num1      
 * @param  {number} num2      
 * @param  {string} operation 
 * @return {number | string} {the result}
 */
function calcResult(num1, num2, operation){
  var result
  if (operation === '+'){
    return num1 + num2
  } else if (operation === '-'){
    return num1 - num2
  } else if (operation === '*') {
    return num1 * num2
  } else if (operation === '/') {
    if (num2 === 0){
      return 'no division by 0'
    } else {
      return num1 / num2
    }
  } else {
    return 'invalid operation'
  }
}


rl.on('line', function (input /* :str */) {
  clear()
  var arr = input.split(' ')
  var operation = arr[0]
  var num1 = Number(arr[1])
  var num2 = Number(arr[2])
  
  if (isNaN(num1) || isNaN(num2)){
    message = 'you must enter two numbers'
  } else {
    message = calcResult(num1, num2, operation)
  }
  
  console.log(message)
  console.log('insert an operation followed by two numbers')
})


clear()
console.log('insert an operation followed by two numbers')