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

const ESCAPE_MESSAGE = 'You escaped the room!'

/**
 * Class representing an interaction with an object in the room
 */
class Action {

    /**
    * Create an Action 
    * @param {string} name
    * @param {string} [code]
    */
    constructor(name, code) {
        this.name = name;
        this.code = code || "";
    }
}

/**
 * Class representing a Result of interacting with an object in the room
 */
class Result {
    /**
    * Create a Result 
    * @param {string} description
    * @param {string[]} [items]
    */
    constructor(description, items) {
        this.description = description;
        this.items = items || null;
    }
}

/**
 *  Class representing an object in the room
 */
class RoomObject {
    
    /**
     * Create a RoomObject
     * @param  {string} name 
     * @param  {string} description
     * @param  {string[]} items
     * @param  {string[]} neededItems
     * @param  {Action[]} actions    
     */
    constructor(name, description, items, neededItems, actions) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.neededItems = neededItems;
        this.actions = actions;
    }

    /**
     * Get the items in the RoomObject
     * @return {string[]}
     */
    getItems() {
        const itemsRef = this.items;
        this.items = [];
        return itemsRef;
    }

    /**
     * Remove all needed items for this RoomObject
     */
    removeNeededItems() {
        this.neededItems = [];
    }

    /**
     * Check if an item is needed for this RoomObject
     * @param  {string} itemName
     * @return {boolean}
     */
    isItemNeeded(item) {
        return this.neededItems.includes(item)
    }

    /**
     * Try to use an item on this RoomObject
     * @param  {string} item
     * @return {boolean}
     */
    useItem(item) {
        if (!this.isItemNeeded(item)) {
            return new Result(`Could not use ${item} on ${this.name}`);
        } else {
            this.removeNeededItems();
            return new Result(`You use ${item} on ${this.name}`, this.getItems());
        }
    }

    /**
     * Check if there are any items in this RoomObject
     * @return {boolean}
     */
    hasItems() {
        return this.items.length !== 0;
    }

    /**
     * Check if any items are needed to interact with this RoomObject
     * @return {boolean}
     */
    needsItems() {
        return this.neededItems.length !== 0;
    }

    /**
     * Get actions available for this RoomObject
     * @return {Result}
     */
    help(){
        const actionNames = this.actions.map(action => action.name);

        return new Result(`Try to ${actionNames.join(' ')} the ${this.name}`)
    }

    /**
     * Try to interact with this RoomObject
     * @param {Action} userAction
     * @return {Result}
     */
    interact(userAction) {
        if (userAction.name === "help"){
            return this.help()
        }

        var action = this.actions.find(action => action.name === userAction.name);

        if (!action){
            return new Result("cannot " + userAction.name + " " + this.name)
        } else if (userAction.code && userAction.code !== action.code) {
            return new Result("Wrong code")
        } else if (this.needsItems()) {
            return new Result(this.description)
        } else if (this.hasItems()) {
            return new Result("You " + action.name + " the " + this.name, this.getItems()) 
        } else if (this.name === "Door") {
            return new Result(ESCAPE_MESSAGE)
        } else {
            return new Result("didn't find anything useful")         
        }
    }
}


/**
 * Class representing a level in the game
 * @class
 */
class Room {
    constructor(objects) {
        this.objects = objects;
    }

    /**
     * Try to retrieve a RoomObject contained in this Room
     * @param  {string} objectName
     * @return {RoomObject | void}
     */
    getObject(objectName) {
        const name = objectName.toLowerCase()
        const maybeObject = this.objects.find(object => object.name.toLowerCase() === name);
        return maybeObject;
    }
}


/**
 * Class representing the player
 */
class Player {  
    /**
     * @param  {string[]} items 
     * @param  {Room} room  
     */
    constructor(room) {
        this.items = [];
        this.currentRoom = room
    }

    /**
    * Try to get an item from the player's inventory
    * @param  {string} itemName
    * @return {string | void}
    */
    getItem(itemName) {
        const name = itemName.toLowerCase();
        const item = this.items.find((itemName) => itemName.toLowerCase() === name);
        return item;
    }

    /**
     * Add items to the player's inventory
     * @param  {string[]} items
     */
    addItems(items) {
        this.items = this.items.concat(items)
    }

    /**
    *  Try to interact with a RoomObject
     * @param  {string} objectName
     * @param  {string} action
     * @return {string}
     */
    interactWithObject(objectName, actionName, code) {
        const object = this.currentRoom.getObject(objectName);

        if (object === undefined) {
            return `${objectName} not found in room`;
        } else {
            var result = object.interact(new Action(actionName, code));
            if (result.items){
                this.addItems(result.items)
                return `${result.description} \n` + `found items: ${result.items}`
            }
            return result.description;
        }
    }

    /**
     * Try to use item on an RoomObject
     * @param  {string} itemName
     * @param  {string} objectName
     * @return {string}
     */
    useItem(itemName, objectName) {
        var item = this.getItem(itemName)
        var object = this.currentRoom.getObject(objectName)

        if (item === undefined) {
            return itemName + " not found in inventory"
        } else if (object === undefined) {
            return objectName + " not found"
        } else {
            var result = object.useItem(item);
            if (result.items){
                this.addItems(result.items)
                return `${result.description} \n` + `found items: ${result.items}`
            }
            return result.description;
        }
    }

}

/**
 * Class representing the game
 */
class Game {
    constructor(rooms) {
        this.currentRoomIndex = 0;
        this.rooms = rooms;
    }

    getCurrentRoom(){
        return this.rooms[this.currentRoomIndex]
    }

    getNextRoom(){
        this.currentRoomIndex++;
        return this.rooms[this.currentRoomIndex]
    }
}

/**
 * @function getObjectNames
 * @param  {RoomObject[]} objects
 * @return {string}
 */
function getObjectNames(objects) {
    var objectNames = objects.map(object => object.name)
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
        "1. [action] [object] \n" + 
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
        const action = words[0].toLowerCase()
        const objectName = words[1].toLowerCase();
        const message = player.interactWithObject(objectName, action)
        if (message === ESCAPE_MESSAGE){
            player.currentRoom = game.getNextRoom();
        }
        return message
    } else if (words[0] === "use" && words.length === 3) {
        const itemName = words[1].toLowerCase();
        const objectName = words[2].toLowerCase();
        const message = player.useItem(itemName, objectName)
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




const firstRoomObjects = [
    new RoomObject("Door", "The door is locked", [], ["key"], [new Action("open")]),
    new RoomObject("Cellar", "It's dark in there", ["key"], ["flashlight"], [new Action("explore")]),
    new RoomObject("Drawer", "", ["flashlight"], [], [new Action("open")]),
    new RoomObject("Bookshelf", "some old books", [], [], [new Action("examine")]),
    new RoomObject("Safe", "", ["key_"], [], [new Action("unlock", "10")] )
]

const secondRoomObjects = [
    new RoomObject("Door", "You need a key", [], ["key"], [new Action("open")]),
    new RoomObject("table", "nothing", [], [], [new Action("examine")]),
]
const rooms = [
    new Room(firstRoomObjects),
    new Room(secondRoomObjects)
]

const game = new Game(rooms)
const player = new Player(game.getCurrentRoom())


clear()
console.log(view())
