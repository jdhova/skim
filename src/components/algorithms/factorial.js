

const factorial = function input (n) {
 
    if(!Number.isInteger(n)) { return ('Enter any number between 1 and 18') 
  }  // handles erros if there is an empty string '' initial state

      if(n < 1) { return ('Number must be an integer')
    } // handles errors to make sure input is an integer
    
      if(n === 1) { return 1  
    } // recursion base

     if (n > 18) { return ('Number must be less than 18')
    }
   
    return n * input(n-1) 
     // recursion
   }

   
   export default factorial;