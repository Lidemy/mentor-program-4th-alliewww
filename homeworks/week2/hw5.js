/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function join(arr, concatStr) {
  let result = '';
  for (let i in arr) {
    result += arr[i];
    i++;
    result += i < arr.length ? concatStr : '';
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  while (result.length < str.length * times) {
    result += str;
  }
  return result;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('a', 5));
