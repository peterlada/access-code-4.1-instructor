var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}




function Math(input) {

  var split = input.split('')
  var input = split[0]
  var num = Number(split[1])
  var num1 = Number(split[2])

  
  if (input === '+') {
      return num + num1
  } else if (input === '-') {
    return num - num1
  } else if (input === '*') {
    return num * num1
  } else if (input === '/') {
    return num / num1
  } else {
    console.log('operation is invalid')
  }
}

rl.on('line', function (input) {
  clear()
  console.log('Enter a math operation followed by two numbers: ' + Math(input))
})