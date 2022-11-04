/* REQUESTS

Types of HTTP Requests:
Get : getting info from a source
Post : posting info to a source that processes info and sends it back
------
Event Loop : async calls
*/

/* fetch()
- creates request using object hat has info the API needs
- sends request object to API endpoint
- returns promise that ends up resolved to a response object. 
Contains the status of a promise with the info from the API
*/

/*
-async keyword declares async function and returns a promise
-await can only be used with async; await pauses program when waiting for problem to resolve

 */

// Example using try..catch

async function getQuote() {
  //try needs a catch and this block, needs to produce some kind of error
  try {
    // <-- not necessarily async; same as chaining together .then();

    //fetch the resource using fetch
    let whereQuotesLive = await fetch("https://type.fit/api/quotes"); // <-- the endpoint; at the end a promise object is returned
    let dataWeReceived = await whereQuotesLive.json(); // <-- quoteArray (array of objects) represents the data I have received

    console.log(dataWeReceived); // <-- to see the object of Quotes as an arrays; where the amount of quotes is found

    //generates random number between 0 and the length of my arrays
    const randomNumber = Math.floor(Math.random() * 1643); //<-- number of quotes in the API
    // const randomNumber = Math.floor(Math.random() * dataWeReceived.length) <-- another way to go about it

    const randomQuote = dataWeReceived[randomNumber]; //<-- random number associated with random data from quoteArray

    //grabbed elements
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    quote.innerHTML = randomQuote.text; // change quote to random number associated with text in the API
    author.innerText = randomQuote.author; // change quote to random number associated with author in the API
    // ^ .innerText (property) does the same thing as .innerHTML
  } catch (err) {
    // or catch(robert) can make the argument anything
    console.log(err.message);
  }
}

const button = document.getElementById("btn-quote");
button.addEventListener("click", getQuote);
onload = getQuote; // <-- calls functions for when page loads

console.log(testing)
