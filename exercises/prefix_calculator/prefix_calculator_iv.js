
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
 * @function calcResult      
 * @param  {string} operation 
 * @param  {number[]} numArr {an array of numbers}
 * @return {number | string} {the result}
 */
function calcResult(operation, numbers){
    var result
    if (operation === '+'){
        return numbers.reduce(function(num1, num2){
            return num1 + num2
        })
    } else if (operation === '-'){
        return numbers.reduce(function(num1, num2){
            return num1 - num2
        })
    } else if (operation === '*') {
        return numbers.reduce(function(num1, num2){
            return num1 * num2
        })
    } else if (operation === '/') {
        return numbers.reduce(function(num1, num2){
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
    // the rest should be numbers
    var rest = arr.slice(1);

    // filtering strings that cannot be converted to numbers
    var restNums = rest.filter(function(str){
        return !isNaN(Number(str)) 
    })

    // converting to array of numbers
    var numbers = restNums.map(function(str){
        return Number(str)
    })

    var result = calcResult(operation, numbers)


    console.log(result)
    console.log('insert an operation followed by numbers')
})


clear()
console.log('insert an operation followed by numbers')

