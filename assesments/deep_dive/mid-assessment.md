# Unit 3 Optional Mid-Assessment

## Question 1

### Question 1 - Level 1

Create 3 functions, each of which takes a string `word` as argument:

* `repeat` ->  returns the word repeated
* `exclaim` -> returns the word followed by an exclamation mark.
* `reverse` -> returns the word reversed.

Make a server that has the routes that correspond to the function names:

* `/repeat/:word/`
* `/exclaim/:word/`
* `/reverese/:word/`

For each route, call the function with the request's `word` parameters, and send the returned value as the response.

### Question 1 - Level 2

Replace the three routes above with a single route:

`/:command/:word`

Create an object `commands`, and place the three functions as values with keys corresponding to their name. Use this object to call the required functions from the route you just created.

If the requested command does not exist, return a message: `[command name] is not a vaid command`.

### Question 1 - Level 3

Create a new route, that takes the word first, followed by two commands.

* `/:word/:cmd1/:cmd2` - will take the word, pass it as input to the function specified by `cmd1`,
  and pass the output to the function specified by `cmd2`, which will be then sent as a response.

Examples:

```text
Request URL: http://localhost:3000/hello/repeat/exclaim
Response: hellohello!
---
Route path: /:word/:exclaim/:repeat
Request URL: http://localhost:3000/hello/exclaim/repeat
Response: hello!hello!
```

### Questions 1 - Level 4

1. Write a function `testCommands` that takes as argument an array of `cmd` strings. The function will return an array with each `cmd` that is not a property of `commands`.

e.g:

```js
const commands = {
  repeat:  ... ,
  exclaim: ... ,
  reverse: ...
}

testCommands(['reverse', 'jump', 'exclaim', 'swim'])
// => ['jump', 'swim']
```

2. When handling the following route : `'/:word/:cmd1/:cmd2'`, if either cmd1 and/or cmd2 are not valid, return a string of this form: `invalid commands` [commands].

Example:

```text
Request: localhost:3000/hello/jump/run
Resonse invalid commands: jump, run
--
Request: localhost:3000/hello/repeat/run
Response: invalid commands: run
--
Request: localhost:3000/hello/do/repeat
Response: invalid commands: do
```

## Question 2

Save the provided `laureates.json` file in same folder as your express server.

* To import the file: `const laureates = require('./laureates')`

### Question 2 - Level 1

* Create two functions:
  * `laureatesByFirstName` that takes a first name and returns all the nobel laureates with that first name.
  * `laureatesByLastName` that takes a first name and returns all the nobel laureates with that first name.

* Create two routes for your server:
  * `/firstname/:firstName` - responds with all laureates with the given first name.
  * `/lastname/:lastName` - responds with all laureates with the given last name.

### Questions 2 - Level 2

* Create a function `laureatesByFullName` that takes a first name and returns all the nobel laureates with that first AND last name.

* Create a route `/fullname/:firstName/:lastName` - that responds with all laureates with the given first AND last name.

### Questions 2 Level 3

Create a function `laureateByPrize` that takes a string with the prize category (e.g `'literature'`) and returns all the laureates who won the given prize.

* create a route `/prize/:prize` - that responds with all laureates who won the given prize.

## Answers

## Q1 - L1

```js
const repeat = (word) => word + word;
const exclaim = (word) => word + '!';
const reverse = (word) => word.split('').reverse().join('');

app.get('/repeat/:word/', (req, res) => {
  res.send(repeat(req.params.word))
})

app.get('/exclaim/:word', (req, res) => {
  res.send(exclaim(req.params.word))
})

app.get('/reverse/:word/', (req, res) => {
  res.send(reverse(req.params.word))
})
```

### Q1 - L2

```js

const commands = {
  repeat: (word) => word + word,
  exclaim: (word) => word + '!',
  reverse: (word) => word.split('').reverse().join('')
}

app.get('/:command/:word/', (req, res) => {
  const { command, word } = req.params;
  if (!commands[command]) {
    return res.send(`${command} is not a valid command`);
  }
  res.send(commands[command](word))
})
```

### Q1 - L3

```js
app.get('/:word/:cmd1/:cmd2', (req, res) => {
  const {cmd1, cmd2, word} = req.params;
  const out1 = commands[cmd1](word);
  const out2 = commands[cmd2](out1)
  res.send(out2)
})
```

### Q1 - L4

```js
function testCommands(cmdArray) {
  return cmdArray.reduce((acc, cmd) =>  {
    if (cmd in commands){
      return acc
    } else {
      return acc.concat(cmd)
    }
  }, [])
}

app.get('/:word/:cmd1/:cmd2', (req, res) => {
  const {cmd1, cmd2, word} = req.params;
  const errors = testCommands([cmd1, cmd2])
  if (errors.length !== 0){
    return res.send('invalid commands: ' + errors.join(', '))
  }
  const out1 = commands[cmd1](word);
  const out2 = commands[cmd2](out1)
  res.send(out2)
})
```

### Q2 - L1

```js
const laureates = require('./laureates')

const laureatesByFirstName = (firstName) =>
  laureates.filter(laureate => laureate.firstName === firstName)

const laureatesByLastName = (lastName) =>
  laureates.filter(laureate => laureate.lastName === lastName)

app.get('/firstname/:firstName', (req, res) => {
  const {firstName} = req.params;
  res.send(laureatesByFirstName(firstName))
})

app.get('/lastname/:lastName', (req, res) => {
  const {lastName} = req.params;
  res.send(laureatesByLastName(lastName))
})
```

### Q2 - L2

```js
const laureatesByFullName = (firstName, lastName) =>
  laureates.filter(laureate =>
    laureate.firstName === firstName && laureate.lastName === lastName)

app.get('/fullname/:firstName/:lastName', (req, res) => {
  const {firstName, lastName} = req.params;
  res.send(laureatesByFullName(firstName, lastName))  
})
```

### Q2 - L3

```js
const laureatesByPrize = (prize) =>
  laureates.filter(laureate => laureate.prizes.includes(prize))

app.get('/prize/:prize', (req, res) => {
  const { prize } = req.params;
  res.send(laureatesByPrize(prize))
})
```