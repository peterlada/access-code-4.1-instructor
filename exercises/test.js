var readline = require('readline')


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * @function getResult
 * @param  {number} num1     
 * @param  {number} num2 
 * @param  {string} operation 
 * @return {type} {description}
 */
function getResult(num1, num2, operation){
  var result = ''
  if (operation === '+'){
    result = num1 + num2
  } else if (operation === '-'){
    result = num1 - num2
  } else if (operation === '*'){
    result = num1 * num2
  } else if (operation === '/'){
    if (num2 === 0){
      result = 'cannot divide by zero'
    } else {
      result = num1 / num2
    }
  } else {
    result = 'invalid operation'
  }

  return result
}


rl.on('line', function (input){
  // Getting input
  var inputArr = input.trim().split(' ')

  console.log('op: ', inputArr[0])
  console.log('num1: ', inputArr[1])
  console.log('num2: ', inputArr[2])

  var num1 = Number(inputArr[1])
  var num2 = Number(inputArr[2])
  var operation = inputArr[0]
  var result = ''
  
  if (isNaN(num1) || isNaN(num2)){
    result =  'you must enter two numbers' 
  } else {
    result = getResult(num1, num2, operation)
  }

  console.log(result)
})