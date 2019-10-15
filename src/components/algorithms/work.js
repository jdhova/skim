

const work = (n) => {

    let arr = []
  
    for (let i = 1; arr.length < n; i++) {
        
      if( i% 15 === 0) {
        arr.push (' DTT is a nice place to work!!, ')
      } else if (i % 5 === 0){
        arr.push(' nice place to work!!, ')
      } else if (i % 3 === 0){
        arr.push(' DTT, ')
      } else {
        arr.push(` ${i}, `)
      }
    };

    return arr
  
  };
  

export default work;


