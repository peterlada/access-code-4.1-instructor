
/*
 *   Boilerplate
 */
'use strict';

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  	process.stdout.cursorTo(0, 0); 
	process.stdout.clearScreenDown();
}

// End of boilerplate

/**
 * @function returns a random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandomNumber (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

/**
 * @function Game
 * @param  {Number} number {the number to guess}
 * @param  {Boolean} win
 * @param  {String} message
 * @return {Object} a game object
 */
function createGame (number, gameOver, message) {
  var game = {
    number: number,
    gameOver: gameOver,
    message: message
  }
  return game
}

/**
 * @function updateGame
 * @param {Game}
 * @param {Number} guess
 * @param {Game} The updated game
 */
function updateGame (game, guess) {
  var number = game.number
  var message = ''
  var gameOver

  if (guess === number) {
    gameOver = true
    message = 'You win!'
  } else if (guess < number) {
    gameOver = false
    message = 'Aim higher'
  } else {
    gameOver = false
    message = 'Aim lower'
  }
  
  var updatedGame = createGame(number, gameOver, message)
  return updatedGame
}


/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
  var guess = Number(input)
  
  game = updateGame(game, guess)
  
  console.log(game.message)
});
  

/**
 * Called when the user starts the game. Sets up the game object.
 * @function startGame 
 *
 */
function startGame(){
  var gameNumber = getRandomNumber(1, 10)
  var gameOver = false
  var message = ''
  game = createGame(gameNumber, gameOver, message)

  clear()
  console.log('Guessing Number Game')
}

var game
startGame()