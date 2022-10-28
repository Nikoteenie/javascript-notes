//SCOPE (defines where a variable can be accessed)

//BLOCKS ({block} in function body and can only be accessed inside {})
//GLOBAL (variable declared out of blocks but can still be accessed by function)

const city = 'NYC'; // <--- GLOBAL
function logCitySkyline() {
  let skyscraper = 'Empire State Building' // <-- BLOCK
  return `The stars over ${skyscraper} in ${city}` 
}
console.log(logCitySkyline())
//Stars over Empire State Building in NYC

const skyColor = () => {
  let color = 'blue';
  console.log(color);
}
skyColor() //blue
//console.log(color) <--error

///////////////////////////////////////////////////////////////

// SCOPE POLLUTION (too many global scopes makes things confusing)

let num = 50 // <-- global
const logNum = () => {
  num = 100; // <-- block
  console.log(num);
}
logNum() //100
console.log(num) //100
/* since num is repeated, the global variable is reassigned to 100.
this is fine now since there is no error BUT if we use num later it will use this new value 
*/


