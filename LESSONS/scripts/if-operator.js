//let year = prompt('Какой сейчас год?');

//if (year == 2019) {
//  console.log('А ты чертовски прав!');
//} else {
//  console.log('А вот хрен ты угадал\)');
//};

//if (year == 2019) {
//  console.log('Ты прав!');
//} else if (year > 2019) {
//  console.log('Ты что из будущего?');
//} else if (year === null) {
//  console.log('Ты что шпион?');
//} else {
//  console.log('ты что из прошлого?');
//}

//let message;
//let age = prompt('Сколько тебе лет?');
//
//message = (age >= 18) ? 'Заходи!' : 'Пшол вон мелкий извращенец!';
//
//console.log(message);

let question = prompt('Какое официальное название JavaScript?');

if (question == 'ECMAScript') {
  console.log('Это правильный ответ!');
} else {
  console.log(`
    Это не правильный ответ.
    Првильный ответ: ECMOScript!
  `);
}