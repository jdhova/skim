


const slowFactorial = function input (n) {
 
  if(!Number.isInteger(n)) { return
};  // handles erros if there is an empty string '' initial state

    if(n < 1) { return 
  }; // handles errors to make sure input is an integer and accepts 
    // 1 and above
  
    if(n === 1) { return 1  
  }; // recursion base

   if (n > 18) { return 
  };
  
  return n * input(n-1);        
   // recursion
 };


 const fastFactorial = function fastFactorial(fn) {

    const memory = {};

    return function(...args) {
      if(memory in args) {
        return memory[args]
      };

      const result = fn.apply(this, args)
      memory[args] = result

      return result
    };

    
 };

 const factorial = fastFactorial(slowFactorial);
 
 
   
   export default factorial;