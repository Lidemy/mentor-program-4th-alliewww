/* eslint-disable no-plusplus */
function printStars(n) {
  if (Number.isNaN(n)) return;
  for (let i = 0; i < n; i++) {
    console.log('*');
  }
}

printStars(5);
