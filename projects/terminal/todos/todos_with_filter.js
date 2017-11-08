var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}




function arrIncludes(arr, ele){
  return arr.indexOf(ele) !== -1;
}

var visibilityOptions = ["all", "active", "completed"]



/**
 * Task Consturctor
 * @constructor 
 * @param  {string} description 
 * @param  {boolean} completed 
 */
function Task(description, completed){
  this.description = description; 
  this.completed = completed;
}

Task.prototype.toggle = function() {
    this.completed = !this.completed      
}

var taskList = {
  tasks: [],
  visibleTasks: tasks,

  addTask: function(description){
    var task = new Task(description, true);
    this.tasks.push(task)
  },
  toggleTask: function(id){
    if (this.tasks[id] === undefined){
      console.log('invalid id')
    } else {
      this.tasks[id].toggle()
    }
  },
  setVisibility: function(completedStatus){
    this.visibleTasks.filter(function(task){
        return task.completed === completedStatus;
    })
  },
  clearVisibility: function(){
      this.visibleTasks = this.tasks;
  },
  logTasks: function(){
     this.visibleTasks.forEach(function(task, i){
        console.log(i + '. ' + task.description + '. Completed ' + task.completed)
     })
  }
} 


function logInstructions(){
  console.log('\nAdd task: add [description]')
  console.log('Toggle completed status: toggle [id]')
  console.log('show [all / active / completed]')
}

/**
 * @function doAction
 * @param  {string} action
 * @param  {string} input 
 */
function doAction(action, input){
  if (action === 'add'){
    var description = input
    taskList.addTask(description)
  } else if (action === 'toggle'){
    var id = Number(input)
    taskList.toggleTask(id)
  } else if (action === 'show'){
    if (input[1] === "all"){
        taskList.clearVisibility()        
    } else if (input[1] === "active"){
        taskList.setVisibility(false)
    } else if (input[1] === "completed"){
        taskList.setVisibility(true)
    }
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