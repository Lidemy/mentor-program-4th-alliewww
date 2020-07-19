/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
function solve(lines) {
  const l = lines[0];
  const _loop_1 = function (i) {
    const a = function () {
      for (let j = 1; j <= lines[i]; j++) {
        if ((lines[i] % j == 0 && j != lines[i] && j != 1) || lines[i] == 1) {
          console.log('Composite');
          return 'Composite';
        }
      }
    };
    if (!a()) console.log('Prime');
  };
  for (let i = 1; i <= l; i++) {
    _loop_1(i);
  }
}
solve('5', '1', '2', '3', '4', '5');
