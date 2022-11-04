/* CONDITIONALS
Perform tasks based on a condition
 */

// if (for when it evaluates true)
if (true) {
  console.log("message will print");
}
// reassigned to be true and thus it will print to console
let sale = false;
sale = true;
if (sale) {
  console.log("Time to buy");
}

// if..else (for when it evaluates false)

if (false) {
  console.log("I will run");
} else {
  console.log("this will not run");
}
///////////////////////////////////////////////////////////////

//Comparison Operator

/*
< less than
> more than 
<= less than or equal to
>= more than or equal to
=== equal to
!== not equal to
 */

let compareOperator = 10 < 12;
console.log(compareOperator);
// true

let fruitComparison = "apples" === "oranges";
console.log(fruitComparison);
//false

let gameLevel = 7;
if (gameLevel > 7) {
  console.log("your a good player");
} else {
  console.log("you suck at this game");
}
//you suck at this game

///////////////////////////////////////////////////////////////

// LOGICAL OPERATORS (work with booleans)

/*
&& (AND operator)
|| (OR operator)
! (NOT / BANG operator)
*/

// AND checks if 2 things are true (both HAVE to be true)
let stopLight = "green";
let pedestrians = 0;

if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop!");
}
// Both are true and return Go!

// OR only one need to be true to return true
if (stopLight === "green" || pedestrians === 1) {
  console.log("Don not go!");
}
// Don't go!

// ! (Bang) reverses or negates the value of a boolean

let excited = true;
console.log(!excited);
//false
///////////////////////////////////////////////////////////////

// TRUTHY & FALSEY (checks if a variable exists and to see if its assigned a variable)
/*
 Falsey if:
 0
 Empty Stings " "
 null
 undefined
 NaN (not a number)
 */

let myVariable = "I exist";
if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist");
}
//returns 'I exist' because myVariable is a truthy statement even tho its not explicitly true

let number = 0;
if (number) {
  console.log("Yes");
} else {
  console.log("No");
}
//returns 'No' because number is falsey
///////////////////////////////////////////////////////////////

// TERNARY OPERATOR (simplifies if..else)

let isNightTime = true;

/*before
if (isNightTime) {
  console.log('Turn on the lights');
}else{
  console.log('Turn off the lights')
}
*/

//after
isNightTime
  ? console.log("Turn on the lights")
  : console.log("Turn off the lights");
// Turn on lights

//example
let favoriteSaying = "Love that";
favoriteSaying === "Love that"
  ? console.log("I love that")
  : console.log("I don not love");
// I love that
///////////////////////////////////////////////////////////////

// ELSE IF (allows for more than 2 possible outcomes, add as many as you need)
let theStopLight = "yellow";
if (theStopLight === "red") {
  console.log("stop");
} else if (theStopLight === "yellow") {
  console.log("slow down");
} else if (theStopLight === "green") {
  console.log("go!");
} else {
  console.log("caution unknown");
}
//slow down ;the first one that is true is executed

// The Switch Keyword (alternative syntax instead of writing many else if statements)

//before
let beforeItem = "papaya";
if (beforeItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (beforeItem === "papaya") {
  console.log("Papayas are $1.49");
} else {
  console.log("Invalid Item");
}
//Papayas are $1.49

//after
let afterItem = "banana";
switch (afterItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $0.75");
    break;
  case "papaya":
    console.log("Papayas are $1.49");
    break;
  default:
    console.log("invalid item");
    break;
}
//invalid item

//EXAMPLE FROM ASSESSMENT OF SWITCH
//"Coding Challenge #2: Computer Store"
function itemPrice(item) {
  switch (item) {
    case "computer":
      console.log("$500");
      break;
    case "mouse":
      console.log("$10");
      break;
    case "case":
      console.log("$25");
      break;
    case "router":
      console.log("$100");
      break;
    default:
      if (typeof item != "string") {
        console.log("You need to input the name of the item.");
      } else {
        console.log("We do not carry that item :(");
      }
      break;
  }
}
itemPrice("case"); // $25
itemPrice("things"); // We do not carry that item :(
itemPrice(55); // You need to input the of the item.

//EXAMPLE from ASSESSMENT
// "Coding Challenge #1: Basketball Score"

let freeThrowPointValue = 1;
let midRangePointValue = 2;
let threePointersPointValue = 3;
function totalBasketballScore(freeThrows, midRange, threePointers) {
  if (
    typeof freeThrows === "number" &&
    typeof midRange === "number" &&
    typeof threePointers === "number"
  ) {
    return (
      freeThrowPointValue * freeThrows +
      midRangePointValue * midRange +
      threePointersPointValue * threePointers
    );
  } else {
    return "You need to input a number!";
  }
}
console.log(totalBasketballScore(2, 3, 4)); // 20
console.log(totalBasketballScore("2", 3, 4)); // You need to input a number!

//EXAMPLE from ASSESSMENT
// "Coding Challenge #4: Leap Year"

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 != 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000)); //true
console.log(isLeapYear(1700)); //false
