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

var str1 = ''
var str2 = ''

rl.on('line', function (input) {
  clear()
  if (input === ''){
    console.log('you must enter something')
  } else{
    if (str1 === ''){
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
