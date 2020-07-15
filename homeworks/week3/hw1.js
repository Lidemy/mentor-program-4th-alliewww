/* eslint-disable no-plusplus */
function solve(n) {
  for (let i = 0; i < n; i++) {
    let s = '';
    for (let j = 0; j <= i; j++) {
      s += '*';
    }
    console.log(s);
  }
}
solve('5');
