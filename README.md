


### Factorial Recussive Solution which takes in any integer between 1 and 8 


function input (n) {
  
 
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

input(2.8)