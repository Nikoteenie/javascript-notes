/*HIGH ORDER FUNCTIONS 
functions that accept other functions arguements 
  and change the name of the function
  */

  const aVeryLongName = () => {
    console.log('important');
  }
  const busy = aVeryLongName;
  busy(); // <-- now is the reference for the original function (Points to the same place)

  //find the original name of the function 
  console.log(busy.name);

  ///////////////////////////////////////////////////////////////

  /* FUNCTIONS AS PARAMETERS
  High Order accepts other functions as parameters, returns a function or both
  Callback function passes in function itself by using fucntion name without ()
  */

  const highOrderFunction = param => {
    param()
    return `I invoked ${param.name} as a callback function.`
  }

  const anotherFunction = () => {
    return 'I\'m being invoked by a higher order function'
  }

  const functionOutput = highOrderFunction(anotherFunction)
  console.log (functionOutput)

  /* 
  1. Accepts single parameter (param) gets invoked using ()
  String is return telling us the name of the callback function
  
  2. Higher Order function named anotherFunction wants to be called
  in highOrderFunction
  
  3. Invoke highOrderFunction passing anotherFunction as an arguement
  fulfilling what it wants (as stated in 2)
  */


  const addTwo = (num) => {
    return num + 2;
  };

  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
      return func(val);
    } else {
      return "inconsistent results";
    }
  };

  console.log(checkConsistentOutput(addTwo, 800));

