
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  	process.stdout.cursorTo(0, 0); 
	process.stdout.clearScreenDown();
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
 * @function opArr
 * @param  {number[]} arr {an array of numbers}
 * @param  {function} opFunc {a function taking two numbers and returning a result}
 * @return {result} {the result of performing the operation on all numbers from left to right}
 */
function opArr(arr, opFunc) {
    var result = arr[0]
    for (var i = 1; i < arr.length; i++){
        result = opFunc(result, arr[i])
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
        return opArr(numbers, function(num1, num2){
            return num1 + num2
        })
    } else if (operation === '-'){
        return opArr(numbers, function(num1, num2){
            return num1 - num2
        })
    } else if (operation === '*') {
        return opArr(numbers, function(num1, num2){
            return num1 * num2
        })
    } else if (operation === '/') {
        return opArr(numbers, function(num1, num2){
            return num1 / num2
        })
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

