sum(2,3);
function sum(a,b=5) {
  let result = a + b;
  return console.log(result);
}

let result = function(a,b) {return a+b;}
let result2 = result;

let x = (a,b) => a+b;