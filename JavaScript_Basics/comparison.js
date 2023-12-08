// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 != 1)
// console.log(2 == 1)


console.log("2" > 1)     //while comparing different type of data (i.e. string and number) the string gets converted into number
console.log("02" > 1)   // while compring different data types we do not get the predictable result so check that they should be of same data type

console.log(NULL > 0);
console.log(NULL == 0);
console.log(NULL >= 0);  // here the null is converted into zero

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);  // in case of undefined we get the same result i.e. false 

console.log("2" === 2);