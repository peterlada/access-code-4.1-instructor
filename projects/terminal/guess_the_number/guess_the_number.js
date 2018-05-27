
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
 * @param  {Number} triesLeft {number of attempts }
 * @param  {Boolean} gameOver
 * @param  {String} message
 * @return {Game} a new Game object
 */
function Game (number, guessList, triesLeft, gameOver, message) {
  var game = {
    number: number,
    guessList: guessList,
    triesLeft: triesLeft,
    gameOver: gameOver,
    message: message
  }
  return game
}

/**
 * @function updateGame
 * @param {Game}
 * @param {Number} guess
 * @param {Game}
 */
function updateGame (game, guess) {
  var number = game.number
  var triesLeft = game.triesLeft - 1
  var message
  var gameOver
  
  if (guess === number) {
    gameOver = true
    message = 'You win!'
  } else if (triesLeft === 0){
    gameOver = true
    message = 'You lose! The Number was: ' + number
  } else if (guess < number) {
    gameOver = false
    message = 'Aim higher'
  } else {
    gameOver = false
    message = 'Aim lower'
  }
  
  var guessList = game.guessList.concat(guess)
  var updatedGame = Game(number, guessList, triesLeft, gameOver, message)
  return updatedGame
}

rl.on('line', function (input) {
  clear()
  var guess = Number(input)
  
  if (isNaN(guess)){
    console.log('insert numbers only!')
  } else {
    game = updateGame(game, guess)
    console.log(game.message)

    if (game.gameOver){
      process.exit()
    } else {
      console.log('guesses: ', game.guessList)
      console.log('tries left: ', game.triesLeft)
      console.log('enter your guess')
    }
  }
});


var game

function startGame(){
  var number = getRandomNumber(1, 10)
  var guessList = []
  var tries = 3
  var gameOver = false
  var message = ''
  game = Game(number, guessList, tries, gameOver, message)

  console.log('enter a number')
}

startGame()