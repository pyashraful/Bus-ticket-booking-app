const createSeats = (rows, startIndex) => {
  let i = 0;
  let j = startIndex;
  let k = 'A';
  const section = [];
  while(i < 6 && j <= rows) {
      if(k > 'F') {
          k = 'A';
          j++;
          console.log(j)
      }
      if(j < rows + 1) {
          section.push(j + k);
          k = String.fromCharCode(k.charCodeAt(0) + 1);
      }
  }
  return section;

}

const n = createSeats(2, '1')
const m = createSeats(10, '3')

console.log(n)
console.log(m)