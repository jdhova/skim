

const work = (n) => {

    let arr = []
  
    for (let i = 1; arr.length < n; i++) {
        
      if( i% 6 === 0) {
        arr.push ('Latifah is the sexiest Angel with Beauty and Brains! , ')
      } else if (i % 4 === 0){
        arr.push(' is the sexiest Angel, ')
      } else if (i % 2 === 0){
        arr.push(' Latifah, ')
      } else {
        arr.push(` ${i}, `)
      }
    };

    return arr
  
  };
  

export default work;


