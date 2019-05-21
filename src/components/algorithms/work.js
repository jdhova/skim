

const work = (n) => {

    let arr = []
  
    for (let i = 1; arr.length < n; i++) {
        
      if( i% 15 === 0) {
        arr.push (' SKIM is a nice place to work!!, ')
      } else if (i % 5 === 0){
        arr.push(' nice place to work!!, ')
      } else if (i % 3 === 0){
        arr.push(' SKIM, ')
      } else {
        arr.push(` ${i},  `)
      }
    }
    return arr
  
  };
  

export default work;


