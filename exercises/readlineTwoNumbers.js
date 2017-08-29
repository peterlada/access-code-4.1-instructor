var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// var num1
// var num2

var num1
var num2

rl.on('line', function (input) {
  clear()
  if (input === ''){
    console.log('you must enter something')
  } else{
    if (num1 === undefined){
      num1 = Number(input)
      console.log('enter second number')
    } else {
      num2 = Number(input)
      var sum = num1 + num2
      console.log('The sum is: ' + sum)
    }
  }
})
  
clear()
console.log('enter first number')
