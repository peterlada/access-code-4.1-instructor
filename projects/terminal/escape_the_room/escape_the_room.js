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
 * RoomObject
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 * @param  {function} [test]
 */
function RoomObject(name, description, items, neededItems, test) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.neededItems = neededItems;
    this.locked = test ? true : false;
    this.test = test;
}


/**
 * @function {unlock}
 * @param  {string} code
 * @return {boolean}
 */
RoomObject.prototype.unlock = function (code) {
    if (!this.test) {
        return false;
    }
    
    var success = this.test(code);
    if (success) {
        this.locked = false;
        return true;
    } else {
        return false;
    }
};

/**
 * @function {getItems}
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsCopy = this.items.slice();
    this.items = [];
    return itemsCopy;
};

/**
 * @function {removeNeededItem}
 * @param  {string} item {the item to remove}
 */
RoomObject.prototype.removeNeededItem = function (item) {
    var itemIndex = this.neededItems.indexOf(item);
    if (itemIndex !== -1) {
        this.neededItems.splice(itemIndex, 1)
    }
};

/**
 * @function {isItemNeeded} 
 * @param  {string} itemName
 * @return {boolean}
 */
RoomObject.prototype.isItemNeeded = function (itemName) {
    var item = findElem(this.neededItems, function (item) {
        return item === itemName
    })

    return item !== undefined
};

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

    /**
     * @function {getItem}
     * @param  {string} itemName
     * @return {string | void}
     */
    this.getItem = function (itemName) {
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
    this.addItems = function (items) {
        this.items = this.items.concat(items)
    }

    /**
     * @function {examineObject}
     * @param  {string} objectName
     * @return {string}
     */
    this.examineObject = function (objectName) {
        var object = this.currentRoom.getObject(objectName)

        if (object === undefined) {
            return "object " + objectName + " not found in room"
        } else if (object.neededItems.length !== 0 || object.locked) {
            return object.description
        } else if (object.items.length > 0) {
            var foundItems = object.getItems()
            this.addItems(foundItems)
            return "found " + foundItems.join(', ');

        } else if (object.name === 'Door') {
            return "You're Free!"
        } else {
            return "Didn't find anything in " + objectName
        }
    }

    /**
     * @function {unlockObject}
     * @param  {string} objectName 
     * @param  {string} code       
     * @return {string} 
     */
    this.unlockObject =  function(objectName, code) {
        var object = this.currentRoom.getObject(objectName);

        if (object === undefined) {
            return "object " + objectName + " not found in room";
        } else if (!object.locked) { 
            return  objectName + " is not locked with a code";
        } else {
            var success = object.unlock(code);
            if (success) {
                return "unlocked " + objectName
            } else {
                return "failed to unlock " + objectName
            }
        }
    }

    /**
     * @function {useItem} use item on object
     * @param  {string} itemName
     * @param  {string} objectName
     * @return {string}
     */
    this.useItem = function (itemName, objectName) {
        var item = this.getItem(itemName)
        var object = this.currentRoom.getObject(objectName)

        if (item === undefined) {
            return "Item " + itemName + " not found in inventory"
        } else if (object === undefined) {
            return "Object " + objectName + " not found in room"
        } else {
            var isNeeded = object.isItemNeeded(item)
            if (!isNeeded) {
                return "Could not use " + itemName + " on " + objectName;
            } else {
                object.removeNeededItem(item)
                return "Used " + itemName + " on " + objectName;
            }
        }
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
        "1. examine [object] \n" + 
        "2. use [item] [object] \n" + 
        "3. enter [object] [code] \n";

    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}

function parseInput(words){
    switch (words[0]){
        case "examine":
            if (words.length === 2){
                var objectName = words[1].toLowerCase();
                var message = player.examineObject(objectName)
                return message
            }
        break;

        case "use":
            if (words.length === 3){
                var itemName = words[1].toLowerCase();
                var objectName = words[2].toLowerCase();
                var message = player.useItem(itemName, objectName)
                return message;
            }
        break;

        case "enter":
            if (words.length === 3){
                var objectName = words[1].toLowerCase();
                var code = words[2];
                var message = player.unlockObject(objectName, code);
                return message;
            }
        break;

        default:
            var message = "invalid command";
            return message;
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

function digitalLockTest(code){
    return code === "10"
}


var room01Objects = [
    new RoomObject("Door", "You need a key", [], ["key"]),
    new RoomObject("Cellar", "It's dark in there", ["key"], ["flashlight"]),
    new RoomObject("Drawer", "there's a lock", ["flashlight"], ["drawer-key"]),
    new RoomObject("Bookshelf", "some old books", ["digital lock hint: 2 in binary"], []),
    new RoomObject("Digilock", "enter a password", ["drawer-key"], [], digitalLockTest)
]

var room01 = new Room(room01Objects)
var player = new Player(room01, ["watch"])

clear()
console.log(view())
