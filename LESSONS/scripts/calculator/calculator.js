'use strict';
//let x = +prompt('Задайте число X:', '0');
//let y = +prompt('Задайте число Y:', '0');
//
//function sum(x,y) {
//  return x + y;
//}
//
//function mult(x,y) {
//  return x * y;
//}

// END FIRST VERSION

/* 
1. Создать пустой объект user
2. Добавить свойство name со значением "John"
3. Добавить свойство surname со значением "Smith"
4. Изменить значение свойства name на Pete
5. Удалить свойство name из объекта
*/

/*
isEmpty(obj) вернет true, если объект пустой и false, если нет.

1. Объявляем функцию;
2. 
*/

function isEmpty(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += +obj[key];
  }
  return sum;
}

/*
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  

*/
