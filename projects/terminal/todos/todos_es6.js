var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}


const visibilityOptions = ["all", "active", "completed"]



class Task {
    constructor(description, completed){
        this.description = description; 
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
        this.visibleTasks = this.tasks;
    }

    addTask (description) {
        this.tasks.push(new Task(description, true));
    }

    toggleTask (id) {
        if (this.tasks[id]) {
            this.tasks[id].toggle()
        }
    }

    setVisibility (completedStatus) {
        this.visibleTasks = 
            this.tasks.filter(task => task.completed === completedStatus);
    }

    clearVisibility(){
        this.visibleTasks = this.tasks;
    }

    logTasks() {
        this.visibleTasks.forEach((task, i) => {
            console.log(`${i}. ${task.description}. Completed: ${task.completed}`);
        })
    }
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
    switch (input){
        case "all":
            taskList.clearVisibility()        
            break;
        case "active":
            taskList.setVisibility(false)
            break;
        case "completed":
            taskList.setVisibility(true)
            break;
        default:
            break;
    }
  }
}

function logInstructions(){
    console.log('\nAdd task: add [description]')
    console.log('Toggle completed status: toggle [id]')
    console.log('show [all / active / completed]')
}

  
rl.on('line', function (input) {
  clear()
  const inputArr = input.split(' ')
  const action = inputArr[0].toLowerCase()
  const restOfInput = inputArr.slice(1).join(' ')
  doAction(action, restOfInput)
  taskList.logTasks()
  logInstructions()
})

let taskList = new TaskList();
clear()
logInstructions()