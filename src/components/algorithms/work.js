

const work =  function SKIM (n) {

    for (let i = 1; i < (n+1); i++) {
      if(i % 15 === 0) {  return('skim is a nice place to work')

        } else if (i % 5 === 0){
            return('is a nice place to work')

        } else if ( i % 3 === 0){
            return('skim')

        } else {
            return(i)
        }
}
}



// const work = function(n) {
//     //create results array
//     //create base case for when n === 1
//     //recurse and push value to array
//     const results = [];
//   if (n === 1) {
//     return '1';
//   } else {
//     if (n % 3 === 0 && n % 5 === 0) {
//       results.push('FizzBuzz');
//     } else if (n % 5 === 0) {
//       results.push('Buzz');
//     } else if (n % 3 === 0) {
//       results.push('Fizz');
//     } else {
//       results.push(''+ n);
//     }
//     return results.concat(work(n - 1));
//   }
// };

// fizzBuzz(100)

export default work;


// SKIM(100)