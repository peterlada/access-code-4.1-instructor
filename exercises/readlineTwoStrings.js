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

var str1
var str2

rl.on('line', function (input) {
  clear()
  // if (num1 === undefined){
  //   num1 = Number(input)
  //   if (isNaN(num1) === )
  // }
  if (input === ''){
    console.log('you must enter something')
  } else{
    if (!str1){
      str1 = input
      console.log('enter second string')
    } else {
      str2 = input
      console.log('you entered: ' + str1 + ', ' + str2)
    }
  }
})
  
clear()
console.log('enter first string')
