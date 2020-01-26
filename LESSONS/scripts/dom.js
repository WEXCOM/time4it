//if (confirm('Перейти на Wikipedia?')) {
//  location.href='https://wikipedia.org';
//};

//let list = {
//  doctype: "<!DOCTYPE html>",
//  html: {
//    type: "element",
//    text: {
//      type: "text",
//      value: " ",
//    },
//    head: {
//      type: "element",
//      meta: {
//        type: "element",
//        charset: "UTF-8",
//      },
//      title: {
//        text: {
//          type: text,
//          value: "LESSON_12",
//        }
//      },
//    },
//    body: {
//      type: "element",
//      ul: {
//        type: "element",
//        li: {
//          type: "element",
//          value: [
//                    "Apple", "Banana", "Orange", "Limon", "Mango"
//                  ],
//      },
//      script: {
//        type: "element",
//        src: "scripts/dom.js",
//      },
//    },
//  },
//}

//for (let i = 0; i < document.body.childNodes.length; i++) {
//  console.log(document.body.childNodes[i]);
//}

//for (let node of document.body.childNodes) {
//  console.log(node);
//}

// Задание №1

let table = document.getElementById('supertable');

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}