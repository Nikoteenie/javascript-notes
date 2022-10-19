//Variables (Declares a new variable)
var variable = "Variables"; //Not used as much
console.log(variable);
//Variables

//Let (CAN be reassigned)
let myName = "Nicole";
console.log(myName);
//Nicole

//Const (can NOT be reassigned)
const friend = "Maddie";
console.log(friend);
//Maddie
///////////////////////////////////////////////////////////////

//Mathematical Assignment Operators

//Before
let w = 4;
w = w + 1;
console.log(w);
//5

//After
let y = 4;
y += 1;
console.log(y);
//5

//Also can be used for -= *= /=

//Increment Operator

let a = 10;
a++;
console.log(a);
//11

let b = 10;
b--;
console.log(b);
//9
///////////////////////////////////////////////////////////////

//String Concatenation w/ Variables

// (+) combines 2 strings
let myPet = "cat";
console.log("I have a " + myPet + ".");
// I have a cat.
///////////////////////////////////////////////////////////////

//String Interpolation uses Template Literals to emebed variables into a string
const aPet = "dog";
console.log(`I have a ${aPet}.`);
// I have a dog

///////////////////////////////////////////////////////////////

// typeof Operator (checks the value to its right and returns a string of what it is)
const check = 'foo'
console.log(typeof check);
//string


