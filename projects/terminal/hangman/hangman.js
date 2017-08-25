

/*
 *   the following is boilerplate code that is given to the students
 */
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// End Of Boilerplate

var words = ['explain', 'truck', 'neat', 'united', 'branch', 'education', 'decision', 'notice']

/**
 * @function getRandomNumber
 * @param  {Number} min 
 * @param  {Number} max {description}
 * @return {Number} {returns a random number between min and max}
 */
function getRandomNumber (min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

function getRandomWord () {
  var randomIndex = getRandomNumber(0, words.length - 1)
  return words[randomIndex]
}

/**
 * @function makeBlankWord
 * @param  {Number} length
 * @return {String} {A string of underscores of the desired length}
 */
function makeBlankWord (length) {
  var underline = '_'
  return underline.repeat(length)
}


/**
 * @function Game
 * @param  {string} gameWord {description}
 * @param  {string} userWord {description}
 * @return {Game} {a game object}
 */
function Game(gameWord, userWord){
  var game =  {
    gameWord: gameWord,
    userWord: userWord
  }

  return game
}


/**
 * @function updateUserWord
 * @param  {Game} game 
 * @param  {String} letter
 * @return {String} {the up}
 */
function updateUserWord (gameWord, userWord, letter) {
  var updatedUserWord = ''

  for (var i = 0; i < userWord.length; i++) {
    if (gameWord[i] === letter[0]) {
      updatedUserWord += gameWord[i]
    } else {
      updatedUserWord += userWord[i]
    }
  }
  return updatedUserWord
}

/**
 * @function updateGame
 * @param  {Game} game 
 * @param  {string} letter 
 * @return {Game}
 */
function updateGame(game, letter) {
  var gameWord = game.gameWord
  var userWord = game.userWord

  var updatedUserWord = updateUserWord(gameWord, userWord, letter)
  var updatedGame = Game(gameWord, updatedUserWord)
  return updatedGame
}



rl.on('line', function (input) {
  clear()

  if (input.length !== 1) {
    console.log('insert one letter at a time!')
  } else {
    // update the game with the new letter
    game = updateGame(game, input)

    console.log(game.userWord)
    
    // The user wins if the user's word is the same as the game word
    if (game.userWord === game.gameWord){
      console.log('you win!')
      process.exit()
    } else {
      console.log('insert a letter: ')
    }
  }
})

var game

function startGame(){
  var gameWord = getRandomWord()
  var userWord = makeBlankWord(gameWord.length)
  game = Game(gameWord, userWord)
  console.log('insert a letter')
}

startGame()