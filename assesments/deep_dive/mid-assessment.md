# Unit 3 Optional Mid-Assessment

## Question

### Level 1

Create 3 functions, each of which takes a string `word` as argument:

* `repeat` ->  returns the word repeated
* `exclaim` -> returns the word followed by an exclamation mark.
* `reverse` -> returns the word reversed.

Make a server that has the routes that correspond to the function names:

* `/repeat/:word/`
* `/exclaim/:word/`
* `/reverese/:word/`

For each route, call the function with the request's `word` parameters, and send the returned value as the response.

## Answer 1

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

### Level 2

Replace the three routes above with a single route:

`/:command/:word`

Create an object `commands`, and place the three functions into keys with their correponding name. Use this object to call the required functions from the route you just created.

If the requested command does not exist, return a message: `[command name] is not a vaid command`.

### Answer 2

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

### Level 3

Create a new route, that takes the word first, followed by two commands.

* `/:word/:cmd1/:cmd2` - will take the word, pass it as input to the function specified by `cmd1`,
  and pass the output to the function specified by `cmd2`, which will be then send as a response.

Examples:

```text
Route path: /:word/:repeat/:exclaim
Request URL: http://localhost:3000/hello/repeat/excliam
Response: hellohello!
---
Route path: /:word/:exclaim/:repeat
Request URL: http://localhost:3000/hello/repeat/excliam
Response: hello!hello!
```

### Answer 3

```js
app.get('/:word/:cmd1/:cmd2', (req, res) => {
  const {cmd1, cmd2, word} = req.params;
  const out1 = commands[cmd1](word);
  const out2 = commands[cmd2](out1)
  res.send(out2)
})
```

### Level 4

1. Write a function `testCommands` that takes as argument an array of `cmd` strings. The function will return an array with each `cmd` that is not a property of `commands`.

e.g:

```js
const commands = {
  repeat: (word) => word + word,
  exclaim: (word) => word + '!',
  reverse: (word) => word.split('').reverse().join('')
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

### Answer 4

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