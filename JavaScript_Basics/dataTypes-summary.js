// primitive data types
const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// const bigNumber = 3543543665653695398563563865365n    // writing 'n' at end makes number big int

// non primitive data types
const countries = ["Russia", "Vienna", "France", "Italy"]    // this is an array
// objects (generally written in key and value pairs)
let myObj = {     // they can be stored in a variable
    name: "Japan",  // comma is used after completion 
    age: 145 ,
}

// function 
// function can be treated like variable in JavaScript
const myFunction = function(){
    console.log("Hello World");
}

// typeof is used to tell the type of data type
console.log(typeof scoreValue);   // type = number
console.log(typeof outsideTemp);  // type for null is object
console.log(typeof bigNumber);  // output is undefined even it is not declared
// typrof for non primitive is object