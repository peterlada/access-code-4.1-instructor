var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  	process.stdout.cursorTo(0, 0); 
	process.stdout.clearScreenDown();
}

// var num1
// var num2

var arr = []
var num


rl.on('line', function (input) {
  clear()
  
  // inputArr = input.split(' ')
  // if (arr.length === 0){
  //   arr = inputArr
  //   console.log('enter a number')
  // } else if (num === undefined) {
    
  // }

  // if (isNaN(numInput)){
  //   console.log('enter a valid number')
  // } else if (num1 === undefined){
  //   num1 = numInput
  //   console.log('input second number')
  // } else if (num2 === undefined) {
  //   num2 = numInput
  //   var sum = num1 + num2
  //   console.log('The sum is: ' + sum)
  // } else {
  //   console.log("we're done here")
  // }
})
  
clear()
console.log('enter a list of numbers separated by spaces')
