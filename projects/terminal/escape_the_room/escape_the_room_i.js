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
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

// End of boilerplate

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
 * Result
 * @constructor
 * @param {string} {description}
 * @param {string[]} [items]
 */
function Result(description, items){
    this.description = description;
    this.items = items || null;
}

/**
 * RoomObject
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 */
function RoomObject(name, description, items, neededItems, verbs) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.neededItems = neededItems;
    this.verbs = verbs;
}


/**
 * @function {getItems}
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsRef = this.items;
    this.items = [];
    return itemsRef;
};

/**
 * @function {removeNeededItem}
 */
RoomObject.prototype.removeNeededItems = function () {
    this.neededItems = [];
};

/**
 * @function {isItemNeeded} 
 * @param  {string} itemName
 * @return {boolean}
 */
RoomObject.prototype.isItemNeeded = function (item) {
    return this.neededItems.indexOf(item) !== -1
};

/**
 * @function {useItem} 
 * @param  {string} item
 * @return {boolean}
 */
RoomObject.prototype.useItem = function(item) {
    var isNeeded = this.isItemNeeded(item)
    if (!isNeeded) {
        return new Result("Could not use " + item + " on " + this.name);
    } else {
        this.removeNeededItems();
        return new Result("Used " + item + " on " + this.name);
    }
}

/**
 * @function examine
 * @return {Result}
 */
RoomObject.prototype.interact = function (verb) {
    if (this.verbs.indexOf(verb) === -1){
        return new Result("cannot " + verb + " " + this.name)
    } else if (this.neededItems.length !== 0) {
        return new Result(this.description)
    } else if (this.items.length > 0) {
        return new Result("You " + verb + " the " + this.name, this.getItems()) 
    } else {
        return new Result("didn't find anything useful") 
    }
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
function Player(room) {
    this.items = [];
    this.currentRoom = room
}

/**
 * @function {getItem}
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
 * @function {addItems}
 * @param  {string[]} items
 */
Player.prototype.addItems = function (items) {
    this.items = this.items.concat(items)
}

/**
 * @function {examineObject}
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.interactWithObject = function (verb, objectName) {
    var object = this.currentRoom.getObject(objectName)

    if (object === undefined) {
        return objectName + " not found in room"
    } else {
        var result = object.interact(verb);
        if (result.items){
            this.addItems(result.items)
            return result.description + "\n" + "found items: " + result.items
        }
        return result.description;
    }
}

/**
 * @function {useItem} use item on object
 * @param  {string} itemName
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.useItem = function (itemName, objectName) {
    var item = this.getItem(itemName)
    var object = this.currentRoom.getObject(objectName)

    if (item === undefined) {
        return itemName + " not found in inventory"
    } else if (object === undefined) {
        return objectName + " not found"
    } else {
        var result = object.useItem(item);
        return result.description;
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
        "1. [verb] [object] \n" + 
        "2. use [item] [object] \n" 

    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}

function parseInput(words){
    
    if (words.length === 2){
        var verb = words[0].toLowerCase()
        var objectName = words[1].toLowerCase();
        var message = player.interactWithObject(verb, objectName)
        return message
    } else if (words[0] === "use" && words.length === 3) {
        var itemName = words[1].toLowerCase();
        var objectName = words[2].toLowerCase();
        var message = player.useItem(itemName, objectName)
        return message;
    } else {
        return "invalid command"
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




var room01Objects = [
    new RoomObject("Door", "You need a key", [], ["key"], ["open"]),
    new RoomObject("Cellar", "It's dark in there", ["key"], ["flashlight"], ["examine"]),
    new RoomObject("Drawer", "", ["flashlight"], [], ["open"]),
    new RoomObject("Bookshelf", "some old books", [], ["examine"]),
]

var room01 = new Room(room01Objects)
var player = new Player(room01)

clear()
console.log(view())
