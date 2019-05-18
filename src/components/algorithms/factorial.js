

const factorial = function input (n) {
 
    if(!Number.isInteger(n)) { return ('Number is not an integer so invalid') 
  }  // handles erros if there is an empty string '' initial state

      if(n < 1) { return ('Number must be an integer')
    } // handles errors to make sure input is an integer
    
      if(n === 1) { return 1  
    } // recursion base

     if (n > 19) { return ('number is greater than 18')
    }
   
    return n * input(n-1) 
     // recursion
   }

   
   export default factorial;