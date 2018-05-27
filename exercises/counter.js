var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  	process.stdout.cursorTo(0, 0); 
	process.stdout.clearScreenDown();
}


function createCounter(count, message){
  var counter = {
    count: count,
    secret: 'The giraffes are coming!',
    message: message
  }
  return counter
}

function updateCounter(counter, action){
  var count = counter.count
  var newCount
  var message

  if (action === 'INC'){
    newCount = counter.count + 1
    message = 'incremented'
  } else if (action === 'DEC'){
    newCount = counter.count - 1
    message = 'decremented'
  } else if (action === 'RES'){
    newCount = 0
    message = 'reset'
  } else if (action === 'SECRET'){
    newCount = count
    message = counter.secret
  } else {
    newCount = count
    message = 'invalid operation'
  }

  var newCounter = createCounter(newCount, message)
  return newCounter
}

// Initial Counter
var counter = createCounter(0, '')

rl.on('line', function (input) {
  clear()

  var action = input.toUpperCase()
  counter = updateCounter(counter, action)

  console.log(counter.count)
  console.log(counter.message)
  console.log('Insert command: INC, DEC, OR RES')
})
  

clear()
console.log(counter.count)
console.log('Insert command: INC, DEC, or RES')
