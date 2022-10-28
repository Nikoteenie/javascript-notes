//FUNCTIONS (reusable block of code)

// The code in a function body runs only when called 
function getGreeting() {
  console.log('Hey Whats up, Jimmy?')
} 
getGreeting(); // <-- good practice
// can be called many times
getGreeting();
getGreeting();
getGreeting();
///////////////////////////////////////////////////////////////

//example of HOISTING -- bad practice (calls function before the function itself)
greetWorld(); // <-- calls the function before the function
function greetWorld() { // <-- this works because it uses the function declaration
//^keyword ^identifier
  console.log("Hello World"); //
}

//let and const don't benefit from hoisting
// function declaration and var can benefit from hoisting

myBool = true
if (myBool) {
  console.log('Hoisted')
} else {
  console.log('not hoisted')
}
//const myBool; <-- error
//let myBool; <-- error
var myBool //Hoisted

///////////////////////////////////////////////////////////////

// PARAMETERS AND ARGUMENTS

/* PARAMETERS: 
Allow functions to accept input to perform a task.
Placeholder for info that will be passed to the function when its called. 
*/

/* ARGUMENTS:
Values passed to the function
*/ 

function calculateArea (width, height) {
  //                    ^^Parameters
  console.log(width * height) // parameters are treated like variables in the function
}
calculateArea ( 5, 9) 
//             ^^Arguments 


//another example

function sayThanks(name) {
  console.log(`Hey ${name}, how are you?`)
}
sayThanks('Hacker');
//Hey Hacker, how are you?
///////////////////////////////////////////////////////////////

/*DEFAULT PARAMETERS 
(allows parameters to have a predetermined value in case there is
NO argument in the function or if its undefined when called)*/

function greeting (name = 'Stranger') {
  console.log(`Hello ${name}`)
}
greeting('Hacker') // Hello Hacker
greeting() // Hello Stranger

///////////////////////////////////////////////////////////////

// RETURN (produces output, print undefined)

function calcArea (width, height) {
  const area = width * height;
  return area;
}

/*when return is used in a function body the execution 
is stopped and the code that follows it will not be executed*/

function rectangleArea (width, height) {
  if ( width < 0 || height < 0) {
    return 'You need to be positive'
  } return width * height; 
}
/*If an argument is with a width/height is less that 0 it returns
the string 'You need to be positive' and the second return will not run */

function monitorCount (rows, columns) {
  return rows * columns 
}
const numOfMonitors = monitorCount(5, 9)
console.log(numOfMonitors);
//45

///////////////////////////////////////////////////////////////

//HELPER FUNCTIONS (return value of a function inside another function)

function multiplyNineFifths (number) {
  return number * (9/5); 
}

function getFahrenheit (celsius) {
  return multiplyNineFifths(celsius) + 32; // <-- same as = number * 9/5 + 32
}
let temperature = getFahrenheit(15)
console.log(temperature)
// 59

/*
1. getFahrenheit() is called with 15 and passes that argument
2. getFahrenheit() in function body calls multiplyNineFifths() and takes 15 as the number parameter
3. multiplyNineFifths() multiples 15 * 9/5 = 27 then in getFahrenheit() adds 32
*/ 

///////////////////////////////////////////////////////////////

/*FUNCTION EXPRESSIONS
*cant be hoisted*
A function w/ no name is an Anonymous Function
To define a function inside an expression use a function key word*/

const calculateTheArea = function(width, height) {
  //  ^^identifier     ^^keyword ^^parameter
  const area = width * height;
  return area;
}

///////////////////////////////////////////////////////////////

//ARROW FUNCTIONS (=>) removes need to type out function

const theRectangleArea = (width, height) => {
  //  ^^identifier       ^^parameter     ^^fat arrow
  const area = width * height;
  return area;
}

///////////////////////////////////////////////////////////////

/* CONCISE BODY ARROW FUNCTIONS
1. Single Parameter no ()
  if it takes a 0 or more than one parameter use ()
2. Function body with one line no {}
    it will be auto returned "implicit return"
    contents of the block follow =>
*/

const sumNum = num => num + num
let numberFive = sumNum(5)
console.log(numberFive)
//10

const plantWater = day => day === 'Wednesday' ? true : false
let today = plantWater('Friday')
console.log(today)
//false










