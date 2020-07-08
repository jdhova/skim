const work = (n) => {
  let arr = [];

  for (let i = 1; arr.length < n; i++) {
    if (i % 6 === 0) {
      arr.push('BINCOM is a nice place to work! , ');
    } else if (i % 4 === 0) {
      arr.push(' is a nice place to work, ');
    } else if (i % 2 === 0) {
      arr.push(' BINCOM, ');
    } else {
      arr.push(` ${i}, `);
    }
  }

  return arr;
};

export default work;
