let integer = 33
console.log(typeof(integer))   // another way to use typeof
let score = "33"
console.log(typeof score)
let valueInNumber = Number(score)    // Number is used to convert string into number 
console.log(typeof valueInNumber);

score = "33abc"
valueInNumber = Number(score)     
console.log(typeof valueInNumber); // now data type of 33abc is number
console.log(valueInNumber);  // while printing the value we get 'NaN' which means Not A Number

score = null
valueInNumber = Number(score)
console.log(valueInNumber)

score = undefined
valueInNumber = Number(score)
console.log(valueInNumber)

score = true          // boolean
valueInNumber = Number(score)
console.log(valueInNumber)   // it gives 0 or 1 as output based on true or false

score = "JavaScript"    // string
valueInNumber = Number(score)
console.log(valueInNumber)   // string on conversion gives NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn);     // empty string gives value false

isLoggedIn = "JavaScript" 
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     // string gives value true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);   // in output we get the same number