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

//let calculator = {
//  read() {
//    this.x = +prompt('Задайте число X:', '0');
//    this.y = +prompt('Задайте число Y:', '0');
//  },
//  sum() {
//    return this.x + this.y;
//  },
//  mult() {
//    return this.x * this.y;
//  }
//};

// END SECOND VERSION

function Calculator() {
  this.read = function() {
    this.x = +prompt('Задайте число X:', '0');
    this.y = +prompt('Задайте число Y:', '0');
  },
  this.sum = function() {
    return this.x + this.y;
  },
  this.mult = function() {
    return this.x * this.y;
  }
}

let calculator = new Calculator();
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

//function isEmpty(obj) {
//  let sum = 0;
//  for (let key in obj) {
//    sum += +obj[key];
//  }
//  return sum;
//}

/*
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  

*/

//let user = {
//  name: 'John',
//  age: 30,
//  sayHi() {
//    console.log(`
//      Привет!
//      Меня зовут ${this.name}!
//    `);
//  }
//};

//let admin = user;
//
//let user2 = {
//  str: "Привет, меня зовут Джон!",
//  hello: () => {console.log(this.str)};
//}

//let ladder = {
//  step: 0,
//  up() {
//    this.step++;
//    return this;
//  },
//  down() {
//    this.step--;
//    return this;
//  },
//  showStep() {
//    console.log(this.step);
//  }
//}
//let user = new User('Федя');
//
//function User(name) {
//  // this = {};
//  this.name = name;
//  this.isAdmin = false;
//  // return this;
//}

//let obj = {};
//
//function A() {
//  return obj;
//}
//function B() {
//  return obj;
//}
//
//let a = new A();
//let b = new B();