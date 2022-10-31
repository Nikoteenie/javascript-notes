/*PROMISES
objects that represent the outcome of async operations.

Promise Objects 
-Pending (initial state-operation not complete)
-Fulfilled (completed success fully and the promise has a resolved value)
-Settled (it is no longer pending)

To make a Promise Object we use the new (keyword) with a Promise Constructor
*/

//looks like:

const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve("I resolved!");
  } else {
    reject("I rejected!");
  }
};
const myPromise = new Promise(executorFunction);

/*
The Executor Functions takes 2 parameters
resolve() && reject()

-resolve (function with one argument)
  -resolve() (resolve invoked changes the promises status from pending --> fulfilled)

-reject (function that takes an error as an argument)
  -reject() (reject invoked changes promises status from pending --> rejected)

The Promise Constructor takes a function as a parameter called the executor function.
The executor function starts the async operation and dictates how promises should be settled.

*/

//ex

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

/*


In the terminal (make sure you have navigated into the javascript file or set the file path)
input:   node promises.js 
to see the output of the above code which is 'Promises { 'Sunglasses order processed}

change the if statement to see what an error looks like
*/
///////////////////////////////////////////////////////////////

/* setTimeOut() Function
is a Node API that uses callback functions to schedule tasks performed after a set delay

has 2 parameters (callback function, delay in milliseconds)

is performed asynchronously using an event-loop
*/

const delayedHello = () => {
  console.log("Hi! This is an asynchronous greeting!");
};

setTimeout(delayedHello, 2000);

/*
shows up about 2 secs after the previous code in terminal 
when you input node promises.js
*/

///////////////////////////////////////////////////////////////

/* CONSUMING PROMISES

.then() (a high order function that takes 2 callback 
functions as arguments called handlers)

"I have a promise, when it settles THEN here is what happens"

So when a Promise settles the appropriate handler is invoked
Handlers:
- onFulfilled(success, resolving)
- onRejected(fail,rejecting)

We can invoke .then() with 1, both or neither handler!
and it ALWAYS returns a Promise
*/

///////////////////////////////////////////////////////////////

/* SUCCESSFUL & FAILURE CALLBACK FUNCTIONS

to handle a successful/resolved Promise invoke .then() and pass the 
success handler callback function
*/

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhh noooo!");
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

/*
1. prom is a promise which resolves 'Yay!'
2. we defined the function handleSuccess(), which prints the argument passed
3. we invoke prom with .then() function passing the handleSuccess()
4. prom resolves, handleSuccess() and handleFailure() and is invoked with prom's 
resolved value 'Yay!' or if rejected 'Ohhh noooo!'
which is logged to console
*/

///////////////////////////////////////////////////////////////

/* catch() with Promises

Separation of concerns: organizing code into sections to handles specific tasks

Chaining .then() to separate resolves and rejects

catch() : takes one argument onRejected , 
if rejected this handler is invoked with its reason
.catch() does the same thing as .then() but with only a failure handler
 */

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

/*
-prom is promise that resolves with 'Yay! or 'Oh noo!
-passed a success handler to .then()
&& reject handler to .catch()
  */

///////////////////////////////////////////////////////////////

/* CHAINING MULTIPLE PROMISES (is called COMPOSITION)

Its basically following a chain of events if this happens then I will do this. 
When that happens then I will do this and so on.
 */

firstPromiseFunction()
  .then((firstResolveVal) => {
    return secondPromiseFunction(firstResolveVal);
  })
  .then((secondResolveVal) => {
    console.log(secondResolveVal);
  });

/*
  -we invoke firstPromiseFunction()
  -we invoke .then() with anonymous function as success handler
  -inside success handler we return a new promise by invoking secondPromiseFunction
  with the first promises resolved value
  - the second .then() is invoked to deal with the logic of second promise setting
  - in that .then() the success handler logs the second promises resolve value
  */
///////////////////////////////////////////////////////////////

/* MISTAKE TO AVOID
Nesting Promises instead of chaining them together
Forgetting to return a promise
 */
///////////////////////////////////////////////////////////////

/* Promises.all()

Multiple ASYNC operations happening together 

it accepts an array of promises as arguments and 
returns a SINGLE promise which is settled in 2 ways:

- RESOLVES : is returned with array containing 
resolved value from each promise in teh arguments array

- REJECTS : rejects with the reason promise rejects (called falling fast)

*/

let myPromises = Promise.all([
  returnsPromOne(),
  returnsPromTwo(),
  returnsPromThree(),
]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

/*
  -declare myPromises and invoke with Promise.all()
  -Promise.all() is invoked with array of 3 promises 
  (which are returned values from functions)
  -invoke .then() with success handler which prints array 
  of resolved values if each promise is successful
  - invoke .catch() with failure handler which prints first rejection message 
  if any promise rejects
*/
