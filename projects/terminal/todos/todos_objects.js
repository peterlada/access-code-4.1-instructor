var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}


function forEachEle(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i)
  }
}

var id = 0;


/**
 * @function createTask
 * @param  {string} description 
 * @param  {boolean} completed 
 * @return {type} {description}
 */
function createTask(description, completed){
  var taskId = id
  // incrementing the global `id` variable
  id += 1

  return {
    id: taskId,
    description: description,
    completed: completed,
    toggle:   function() {
      this.completed = !this.completed      
    }
  }
}


var taskList = {
  tasks: [],
  addTask: function(description){
    var newTask = createTask(description, false)
    this.tasks.push(newTask)
  },
  toggleTask: function(id){
    if (this.tasks[id] === undefined){
      console.log('invalid id')
    } else {
      this.tasks[id].toggle()
    }
  },
  logTasks: function(id){
    forEachEle(this.tasks, function(task){
      console.log(`${task.id}. ${task.description}. Completed: ${task.completed}`)
    })
  }
} 


function logInstructions(){
  console.log('\nTo add task: add [description]')
  console.log('To toggle completed status: toggle [id]')
}

function doAction(action, input){
  if (action === 'add'){
    var description = input
    taskList.addTask(description)
  } else if (action === 'toggle'){
    var id = Number(input)
    taskList.toggleTask(id)
  }
}

rl.on('line', function (input) {
  clear()
  var inputArr = input.split(' ')
  var action = inputArr[0].toLowerCase()
  var restOfInput = inputArr.slice(1).join(' ')
  doAction(action, restOfInput)

  taskList.logTasks()
  logInstructions()
})

clear()
logInstructions()