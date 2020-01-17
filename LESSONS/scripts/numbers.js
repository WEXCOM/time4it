'use strict';

let firstNumber, lastNumber;

while (true) {
  firstNumber = +prompt('Введите число:');
  if (isNaN(firstNumber) == false) {
    break;
  };
};

while (true) {
  lastNumber = +prompt('Введите число:');
  if (isNaN(lastNumber) == false) {
    break;
  };
};

console.log('Cумма двух чисел: ' + (firstNumber + lastNumber) + '!');