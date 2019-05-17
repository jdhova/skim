



const factorial = function input (n) {
  
 
    if(!Number.isInteger(n)) {
      return 'this number is not an integer'
      
    }
    
      if(n === 1) {
       return 1
     }
   
     if (n > 19) { return 'number is greater than 18'
     }
   
    return n * input(n-1) 
     
   }
   