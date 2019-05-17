

const factorial = function input (n) {
  
 
    if(!Number.isInteger(n)) {
        
      return ('number is not an integer so invalid')  
      
    }
    
      if(n === 1) {
       return 1
     }
   
     if (n > 19) { return ('number is greater than 18')
     }
   
    return n * input(n-1) 
     
   }

   
   export default factorial;