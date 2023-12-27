const name = "Luffy";
const repoCount = 3;

// String Concatenation -> outdated
//console.log(name +"'s"+ " repo count = " + repoCount);

// String Interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare a string by the help of  objects of java script
// new keyword is used and string is passed inside the constructor of string
const gameName = new String('Monkey D. Luffy')
console.log(gameName);
console.log(gameName[0]);


// accessing prototype methods
console.log(gameName.length);
console.log(gameName.toUpperCase());  // here original string does not changes bcoz changes are done in its copy 
console.log(gameName.charAt(7));   // tells the character at the position specified by user
console.log(gameName.indexOf("D")); // tells the position of the character

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, -2)
// slice can only take '-ve' as an input
// when '-ve' value is given in input it counts in reverse order
console.log(anotherString);

const newStringOne = "             Whitespaces                    ";
console.log(newStringOne);
// trim is used to remove whitespaces and line terminators(\n) from the string
// it two variants i.e.  trimEnd  and  trimStart
console.log(newStringOne.trim());   


const url = "https://github.com/monkey%20luffy";
// while writing url if we enter space b/w url then browser replace that space by %20 in uel encoding
// so replace is used

console.log(url.replace('%20', '-'));

console.log(url.includes("luffy")); // includes tells whether the string entered by user is present in the original string or not

// it breakes the string wherever it finds the splitter entered by user and returns an array of the splitted parts of string
console.log(gameName.split(' ')) 