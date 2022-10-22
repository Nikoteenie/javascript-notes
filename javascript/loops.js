//Loops (repeats a set of instructions until specified condition is met)

/* FOR
1. initialization starts loop
2. stopping condition; 
if true = runs // false = stop
3. Iteration statement updates iterator value on each loop
*/
console.log("First For Loop:");

for (let counter = 0; counter < 4; counter++) {
  //Initialization ^, stopping condition, iteration statement
  console.log(counter);
}
/*
1. initalization: let counter = 0 
2. stopping condition: counter < 4 
runs as long as iterate value (counter) is less than 4
3. iteration statement: counter++ 
each loop counter icncreases by 1 
first iterate counter = 0
second = 1
and so on 
*/

console.log("Second For Loop:");
// Program that loop through 5-10 and logs each number to the console
for (let loop = 5; loop < 11; loop++) {
  console.log(loop);
}
///////////////////////////////////////////////////////////////

/*LOOPS IN REVERSE
1. Iterator variable: highest desired value in intialization expression
2. Stopping condition: iterator variable; less than desired amount
3. Iterator descreses for each oteration
*/
console.log("Loop Unreversed:");
//before
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

console.log("Loop Reversed:");
//after
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
///////////////////////////////////////////////////////////////

/* LOOP THRU ARRAYS 
to loop through each element of array use .length property
*/
console.log("First Loop through Array:");

const animals = ["bear", "sloth", "lion"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
////////////

console.log("Second Loop through Array:");

const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would like to visit ${vacationSpots[i]}`);
}

///////////////////////////////////////////////////////////////

/* NESTED LOOPS (A loop running inisde another loop)

1. Nested for loop = compares elementsin two arrays
2. Each round of outer for loop, the inner for loop runs and completes
*/
console.log("Nested Loop:");

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both arrays have the number: " + yourArray[j]);
    }
  }
}
///////////////////////////////////////////////////////////////

// WHILE (use when you're not sure how many times your loop should run)
console.log("While Loop:");

let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}

///////////////////////////////////////////////////////////////

/* DO WHILE
Do task ATLEAST once and keep doing it until specified condition is NO LONGER met */

console.log("Do While Loop 1:");

let countString = "";
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);

//code block changes countString by adding i to it

console.log("Do While Loop 2:");

let cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded + " cups was added");
} while (cupsAdded < cupsOfSugarNeeded);

///////////////////////////////////////////////////////////////

/* BREAK KEYWORD
"break" out of loop from within loops block
 */
console.log("Using Break Keyword:");

for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana");
}
console.log("Orange");
