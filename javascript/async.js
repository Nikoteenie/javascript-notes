/* ASYNC AWAIT
**console does not reflect well for this section**


actions that we can wait on while working on other tasks

event-loop : executes tasks while async is completing

async...await : allows writing async code like sync code
(referred to as syntactic sugar)
*/

/* async (keyword)
writes a function that handles asynchronous actions/
wrap the async logic inside a function and put async before it
--> then invoke the function
*/

//Looks like:
async function myFunc() {
  // Function body here
}
myFunc();

// OR

const myFunc2 = async () => {
  // Function body here
};
myFunc();

/* 
async functions return a promise thus can use .then() && .catch()

Async return:
1. Nothing returned from the function, its resolve value will returned UNDEFINED
2. Non-promise value returned from function it will return promise resolved from that value
3. if promise is returned it will return that promise

node filename.extension (to run)
*/
///////////////////////////////////////////////////////////////

/* AWAIT OPERATOR
await pauses the execution of an async function

await can only be used inside async and it returns the resolved value of a promise
*/

async function asyncFuncExample() {
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!

/*
we used wait here to halt execution of myPromise() until its resolved 
and then assign its resolve value to resolvedValue
then that value is logged
*/
///////////////////////////////////////////////////////////////

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yay, I resolved!");
    }, 1000);
  });
};

async function noAwait() {
  let value = myPromise(); // <-- value assigned to promise object itself
  console.log(value);
}

async function yesAwait() {
  let value = await myPromise(); // <-- value assigned to resolved value
  console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
// ^ because no await, the function execution was'nt paused and was executed before problem was resolved
yesAwait(); // Prints: Yay, I resolved!
///////////////////////////////////////////////////////////////

//BEFORE
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
    .then((secondValue) => {
      console.log(secondValue);
    });
}

//AFTER
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
////////////////////////////////////////////////////////////////

/* HANDLING ERRORS

with .catch() its hard to find errors

vs async...await we can use try...catch to help debug errors

*/

async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction("thing that will fail");
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
}

usingTryCatch();
////////////////////////////////////////////////////////////////

/* INDEPENDENT PROMISES
async function that contain multiple promises that are
not dependent on the result of one another to execute
*/

async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
}
/*
In waiting():
we pause out function until first promise resolves
then we construct second promise 
and print both values
*/

async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}
/*
In concurrent():
both promises are async operation that can run simultaneously
taking advantage of concurrency (performing async actions at the same time)

if we have multiple truly independent promises that we want to execute in parallel of one another
we MUST use individual .then() functions and avoid halting using await
*/
/////////////////////////////////////////////////////////////////

/* AWAIT Promise.all()
multiple promises to be executed simultaneously 
*/

async function asyncPromAll() {
  const resultArray = await Promise.all([
    asyncTask1(),
    asyncTask2(),
    asyncTask3(),
    asyncTask4(),
  ]);
  for (let i = 0; i < resultArray.length; i++) {
    console.log(resultArray[i]);
  }
}

/*
here we await the resolution of a Promise.all()
we invoked Promise.all() with an argument array with 4 promises 
then we loop through the resultArray and log each item
the first element in resultArray is the resolved value of asyncTask1() then asyncTask2()
and so on..

Promise.all() allows you to take advantage of async
has benefit of failing fast, meaning it wont wait for the rest
of the async actions to complete once one is rejected.
Once one rejects the promise returned from Promise.all() will reject with that reason.

Promise.all() is a good choice if multiple asynchronous tasks are all required, 
but none must wait for any other before executing.
*/
