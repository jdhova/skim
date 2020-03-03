

const work = (n) => {

    let arr = []
  
    for (let i = 1; arr.length < n; i++) {
        
      if( i% 15 === 0) {
        arr.push ('  the just just the best! , ')
      } else if (i % 5 === 0){
        arr.push(' is the best, ')
      } else if (i % 3 === 0){
        arr.push(' Lululicious, ')
      } else {
        arr.push(` ${i}, `)
      }
    };

    return arr
  
  };
  

export default work;


