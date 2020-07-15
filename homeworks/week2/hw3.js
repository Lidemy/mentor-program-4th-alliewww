/* eslint-disable no-plusplus */
function reverse(str) {
  let a = '';
  for (let i = 0; i < str.length; i++) {
    a += str[str.length - i - 1];
  }
  console.log(a);
}

reverse('hello');
