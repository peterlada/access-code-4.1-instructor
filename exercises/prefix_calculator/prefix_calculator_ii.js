var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

/**
 * @function arrStrToNum
 * @param  {string[]} arr {array of strings}
 * @return {number[]} {array of numbers}
 */
function arrStrToNum(arr){
    var numArr = [];
    for (var i = 0; i < arr.length; i++) {
      numArr.push(Number(arr[i]))
    }
    return numArr
}

/**
 * @function addArr
 * @param  {number[]} arr {array of numbers}
 * @return {number} {the sum of all numbers}
 */
function addArr(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++){
        result = result + arr[i]
    }
    return result
}

/**
 * @function subArr
 * @param  {number[]} arr {array of numbers}
 * @return {number} {the result of subtracting the numbers from left to right}
 */
function subArr(arr){
    var result = arr[0];
    for (var i = 1; i < arr.length; i++){
        result = result - arr[i]
    }

    return result
}

/**
 * @function multArr
 * @param  {number[]} arr {array of numbers}
 * @return {number} {the product of all mumbers}
 */
function multArr(arr){
    var result = arr[0];
    for (var i = 1; i < arr.length; i++){
        result = result * arr[i]
    }

    return result
}

/**
 * @function divArr
 * @param  {number[]} arr {array of numbers}
 * @return {number} {the result of dividing all numbers from left to right}
 */
function divArr(arr) {
    var result = arr[0]
    for (var i = 1; i < arr.length; i++){
        result = result / arr[i]
    }

    return result
}

/**
 * @function calcResult      
 * @param  {string} operation 
 * @param  {number[]} numArr {an array of numbers}
 * @return {number | string} {the result}
 */
function calcResult(operation, numbers){
    var result
    if (operation === '+'){
      return addArr(numbers)
    } else if (operation === '-'){
      return subArr(numbers)
    } else if (operation === '*') {
      return multArr(numbers)
    } else if (operation === '/') {
      return divArr(numbers)
    } else {
      return 'invalid operation'
    }
}
  
rl.on('line', function (input) {
    clear()
    var arr = input.split(' ')
    // first character is the operation
    var operation = arr[0];
    // rest should be numbers
    var rest = arr.slice(1);
    // converting to array of numbers
    var numbers = arrStrToNum(rest);


    var result = calcResult(operation, numbers)


    console.log(result)
    console.log('insert an operation followed by numbers')
})


clear()
console.log('insert an operation followed by numbers')