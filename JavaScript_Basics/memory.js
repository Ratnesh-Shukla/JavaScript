// Two types of memory:  1> Stack(primtive)    2> Heap(non-primitive)
let country1 = "France";

let country2 = country1;  // here copy is given
country2 = "Spain";   // so this change does not affect country1

console.log(country1);
console.log(country2);

let userOne = {      // variable is declared in stack and the function is stored in heap and reference is given to variable
    email: "ussr@hotmail.com",
    upi: "user@ibl",
}

let userTwo = userOne;  // same reference is given to userTwo

// objects are accesse using (dot'.') operator
userTwo.email = "user@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);