'use strict';
/*
 *   Boilerplate
 */


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clear() {
    	process.stdout.cursorTo(0, 0); 
	process.stdout.clearScreenDown();
}

// End of boilerplate

/**
 * Action
 * @constructor
 * @param {string} name
 * @param {string} objectName
 * @param {string} [payload]
 */
function Action(name, objectName, payload){
    this.name = name;
    this.objectName = objectName;
    this.payload = payload || null;
}
 
/**
 * ActionResult
 * @constructor 
 * @param  {string} description 
 * @param  {string[]} items      
 */
function ActionResult(description, items){
    this.description = description;
    this.items = items || null;
}

/**
 * @function findElem
 * @param  {any[]} arr
 * @param  {function} callback
 * @return {any | void} {the first element, if exists in the array, to satisfy the callback}
 */
function findElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}


/**
 * RoomObject
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 * @param  {} actions
 */
function RoomObject(name, items, neededItems, actions) {
    this.name = name;
    this.items = items;
    this.neededItems = neededItems;
    this.actions = actions;
}


/**
 * @function getAction
 * @param  {Action} action
 * @return {ActionResult}
 */
RoomObject.prototype.getAction = function(action){
    if (!this.actions[action.name]){
        return 'cannot ' + action.name + ' ' + this.name;
    } else {
        return this.actions[action.name].call(this, action);
    }
}

/**
 * @function {getItems}
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsCopy = this.items;
    this.items = [];
    return itemsCopy;
};

/**
 * @function {removeNeededItems}
 */
RoomObject.prototype.removeNeededItems = function (item) {
    console.log(this)
    this.neededItems = [];
};

RoomObject.prototype.hasItems = function () {
    return this.items.length !== 0;
}

RoomObject.prototype.needItems = function() {
    return this.neededItems.length !== 0;
}




/**
 * Room
 * @constructor
 * @param  {RoomObject[]} objects
 */
function Room(objects) {
    this.objects = objects;
}

/**
 * @function {getObject}
 * @param  {string} objectName
 * @return {RoomObject | void}
 */
Room.prototype.getObject = function (objectName) {
    var name = objectName.toLowerCase()
    var object = findElem(this.objects, function (object) {
        return object.name.toLowerCase() === name
    })
    return object
}

/**
 * Player
 * @constructor
 * @param  {string[]} items 
 * @param  {Room} room  
 */
function Player(room, items) {
    this.items = items || [];
    this.currentRoom = room
}

/**
 * @function getItem
 * @param  {string} itemName
 * @return {string | void}
 */
Player.prototype.getItem = function (itemName) {
    var name = itemName.toLowerCase()
    var item = findElem(this.items, function (itemName) {
        return itemName.toLowerCase() === name
    })
    return item
}

/**
 * @function addItems
 * @param  {string[]} items
 */
Player.prototype.addItems = function (items) {
    this.items = this.items.concat(items)
}

/**
 * @function itemAction
 * @param  {string} itemName
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.itemAction = function (action) {
    var itemName = this.getItem(action.payload)
    var object = this.currentRoom.getObject(action.objectName)
    console.log("itemName: " , itemName)
    if (itemName === undefined) {
        return "Item " + itemName + " not found in inventory";
    } else if (object === undefined) {
        return action.objectName + " not found in room";
    } else {
        return object.getAction(action)
    }
}

/**
 * @function otherAction
 * @param  {Action} action
 * @return {string}
 */
Player.prototype.otherAction = function (action) {
    var object = this.currentRoom.getObject(action.objectName)

    if (object === undefined) {
        return action.objectName + " not found in room";
    } else {
        var result = object.getAction(action)
        if (result.items){
            this.addItems(result.items)
            return result.description + "\n found items: " + result.items;      
        } else {
            return result.description
        }
    }
}

/**
 * @function {doAction}
 * @param  {Action} action {description}
 * @return {type} {description}
 */
Player.prototype.doAction = function(action){

    if (action.name === "use" && action.payload){
        var message = this.itemAction(action);
        return message;
    } else {
        var message = this.otherAction(action);
        return message;
    } 
}
/**
 * @function getObjectNames
 * @param  {RoomObject[]} objects
 * @return {string}
 */
function getObjectNames(objects) {
    var objectNames = objects.map(function (object) {
        return object.name
    })
    return objectNames.join("\n")
}

/**
 * @function view
 * @param  {string} [message]
 * @return {string}
 */
function view(message) {
    message = message || ""
    var room = player.currentRoom
        var title =
            "--Escape the room-- \n" + 
            "input: [action] [object] [item] \n"

    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}



var room01Objects = [
    new RoomObject("Door", [], ["door-key"], {
        examine: function(){
            return new ActionResult("It's a thick wooden door")
        },
        open: function() {
            if (this.needItems()) {
                return new ActionResult("The door is locked")
            } else {
                return new ActionResult("You're free!")
            }
        },
        unlock: function(action) {
            if (action.item === "door-key") {
                this.removeNeededItems();
                return new ActionResult("You unlock the door")
            } else {
                return new ActionResult("It doesn't work")
            }
        }    
    }),
    new RoomObject("cellar", ["key"], ["flashlight"], {
        examine: function() {
            return new ActionResult("It's dark in there")
        }, 
        use: function(action) {
            if (action.payload === "flashlight") {
                this.removeNeededItems()
                return new ActionResult("You use the flashlight to examine the cellar", this.getItems)
            } else {
                return new ActionResult("This has no effect")
            }
        }
    }),
    new RoomObject("drawer", ["flashlight"], ["drawer-key"], {
        examine: function() {
            if (this.needItems()){
                return new ActionResult("The drawer is locked")
            } else if (this.hasItems()){
                return new ActionResult("You rummage through the drawer",  this.getItems())
            } else {
                return new ActionResult("It's a small drawer")
            }
        }, 
        use: function(action) {
            console.log(action)
            if (action.item === "drawer-key") {
                this.removeNeeded()
                return new ActionResult("You open the drawer with the key")
            } else {
                return new ActionResult("This has no effect")
            }            
        }
    }),
    new RoomObject("bookshelf", ["note: '2 in binary'"], [], {
        examine: function() {
            if (this.hasItems()) {
                return new ActionResult("You search between the books.", this.getItems())
            } else {
                return new ActionResult("It's a dusty bookshelf")
            }
        }
    }),
    new RoomObject("safe", ["drawer-key"], ["code"], {
        examine: function() {
            return new ActionResult("There's a keypad on it.")
        },
        unlock: function(action) {
            console.log(this)
            if (!this.needItems()) {
                return new ActionResult("It's already unlocked.")
            } else if (!action.payload) {
                return new ActionResult("It's locked with a code.")
            } else if (action.payload === "10"){
                this.removeNeededItems();
                return new ActionResult("You unlock the safe.", this.getItems())
            } else {
                return new ActionResult("Incorrect code.") 
            }
        }
    })
]

var room01 = new Room(room01Objects)
var player = new Player(room01)


function parseInput(words) {
    if (words.length === 2){
       var action = new Action(words[0], words[1])
       var message = player.doAction(action)
       return message
    } else if (words.length === 3) {
        var action = new Action(words[0], words[1], words[2])
        var message = player.doAction(action)
    }
    
}

/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
    clear()

    var words = input.split(' ')


    var message = "-- message -- \n" 
                  + parseInput(words)
                  + "\n"

    console.log(view(message))    
});

clear()
console.log(view())

player.doAction(new Action("examine", "door"))
