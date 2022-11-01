/* REQUESTS

Types of HTTP Requests:
Get : getting info from a source
Post : posting info to a source that processes info and sends it back
Event Loop : async calls
*/

/* GET using FETCH

fetch()
- creates request using object hat has info the API needs
- sends request object to API endpoint
- returns promise that ends up resolved to a response object. 
Contains the status of a promise with the info from the API
*/
/* example:
fetch ('url').then(response => {
  if (response.ok) { // <-- returns a boolean
return response.json;
  }
})
*/

// Example from Class using try..catch 

async function getQuote() {
  try {
    // <-- not necessarily async; same as chaining together .then();

    //grabbed elements
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
  

    let quoteArray = await fetch("https://type.fit/api/quotes"); // <-- the endpoint; at the end a promise object is returned
    quoteArray = await quoteArray.json(); // <-- quoteArray (array of objects) represents the data I have received

    const randomNumber = Math.floor(Math.random() * 1643); //<-- number of quotes in the API
    const randomQuote = quoteArray[randomNumber]; //<-- random number associated with random data from quoteArray

    quote.innerHTML = randomQuote.text;
    author.innerHTML = randomQuote.author;
  } catch (err) {
    console.log(err.message);
  }
}

const button = document.getElementById("btn-quote");
button.addEventListener("click", getQuote);
onload = getQuote;


