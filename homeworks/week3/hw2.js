/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
function solve(lines) {
  const read = lines[0].split(' ');
  for (let i = Number(read[0]); i <= Number(read[1]); i++) {
    const l = String(i).length;
    let ans = 0;
    for (let j = 0; j < l; j++) {
      ans += Math.pow(Number(String(i)[j]), l);
    }
    if (ans === i) {
      console.log(ans);
    }
  }
}
solve('5 200');
