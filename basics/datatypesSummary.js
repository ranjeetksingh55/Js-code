// Primitive (Call by Value)

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, Bigint (large value)

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 345432344334n




// Reference Type (Non Primitive)

// Arrary, Objects, Functions

const heroes = ["shaktiman", "hanuman"];
let myObj = {
    name : "ranjeet",
    age : 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //object
console.log(typeof isLoggedIn); // boolean
console.log(typeof myFunction); // function
console.log(typeof heroes); // object
console.log(typeof anotherId); // symbol



