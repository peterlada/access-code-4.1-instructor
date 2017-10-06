var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}


function dateToString(d){
    var dateString = d.getDate()  + "/" + (d.getMonth()+1)   
    return dateString;
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
  this.date = null;
}

Task.prototype.toggle = function() {
    this.completed = !this.completed      
}

Task.prototype.setDate = function(date){
    this.date = date;
}

Task.prototype.getPretty = function(index) {
    var prettyString = index + ". " + this.description + 
                       ". Completed: " + this.completed;
    if (this.date) {
        prettyString += " Do by: " + dateToString(this.date)
    }
    return prettyString;
}

var taskList = {
  tasks: [],
  show: 'all',
  addTask: function(description){
    var task = new Task(description, true);
    this.tasks.push(task)
  },
  setTaskDate: function(id, month, day){
    if (this.tasks[id] === undefined){
    console.log('invalid id')
    } else {
        var date = new Date(2017, month, day)        
        this.tasks[id].setDate(date)
    }
  },
  toggleTask: function(id){
    var index = id - 1;
    if (this.tasks[index] === undefined){
      console.log('invalid id')
    } else {
      this.tasks[index].toggle()
    }
  },
  logActive: function(){
    this.tasks.forEach(function(task, i) {
      if (!task.completed){
        console.log(task.getPretty(i + 1))
      }
    })
  },
  logCompleted: function(){
    this.tasks.forEach(function(task, i){
      if (task.completed){
        console.log(task.getPretty(i + 1))
      }
    })
  },
  logAll: function(){ 
    this.tasks.forEach(function(task, i){
        console.log(task.getPretty(i + 1))
    })
  },
  logTasks: function(){
    if (this.show === 'completed'){
      this.logCompleted();
    } else if (this.show === 'active'){
      this.logActive();
    } else {
      this.logAll();
    }
  }
} 


function logInstructions(){
  console.log('\n' + 
              'Add task: add [description]' + '\n' + 
              'Toggle completed status: toggle [id]' + '\n' +
              'show [all / active / completed]');
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
  } else if (action === "date") {
    console.log(input.length)
  } else if (action === 'show' && arrIncludes(visibilityOptions, input)){
    taskList.show = input      
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