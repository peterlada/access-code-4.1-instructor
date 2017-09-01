var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function status(room){
  console.log('you are in ', room.name)
  console.log('items in room: ', room.items)
  console.log('you see ' + doors)
}

var player = {
  items: []
}

var room = {
  name: 'large room',
  items: ['key'],
  doors: ['big door north']
}

rl.on('line', function (input) {
  clear()
  
  var numInput = Number(input)

})
  
clear()
console.log('You are in a room')
