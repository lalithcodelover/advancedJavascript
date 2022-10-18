//using this for window object
this.table= 'window table'

this.garage = {
    table : 'garage table'
}

console.log(this.table)
console.log(this.garage.table)

//using this inside an object
let livingRoom = {
    table : 'living room table'
}
console.log(livingRoom.table)

//using this inside a method in object
let bedRoom = {
    table: 'bedroom table',
    cleanTable() {
     console.log(`Cleaning ${this.table} is in progress`)
    }
}
bedRoom.cleanTable()

//using this inside a function using call
let polish = function() {
    console.log(`Polishing ${this.table}`)
}
polish.call(this)
polish.call(this.garage)
polish.call(bedRoom)

// using this inside a innerfunction with help of call and bind
let moving = function() {
    const innerFunction =function() {
    console.log(`Moving ${this.table}`)
    }
    innerFunction.bind(this)
    //innerFunction.call(this)
}
moving.call(bedRoom)
moving.call(this.garage)

// using this inside constructor
// let createRoom = function(name) {
//     this.table = `${name}s table`
// }

// createRoom.prototype.washTable= function(soap) {
//     console.log(`Washing ${this.table} using ${soap}`)
// }

// let johnsRoom = new createRoom("John");

// johnsRoom.washTable("some soap")

// using this inside class
// class createRoom {
//   constructor(name) {
//     this.table = `${name}s table`
// }
// washTable(soap) {
//     console.log(`Washing ${this.table} using ${soap}`)
// }
// }

// let johnsRoom = new createRoom("John");

// johnsRoom.washTable("some soap")


