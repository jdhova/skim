

const work =  function SKIM (n) {

    for (let i = 1; i < (n+1); i++) {
      if(i % 15 === 0) {  console.log('skim is a nice place to work')

        } else if (i % 5 === 0){
            console.log('is a nice place to work')

        } else if ( i % 3 === 0){
            console.log('skim')

        } else {
            console.log(i)
        }
}

}

export default work;


// SKIM(100)