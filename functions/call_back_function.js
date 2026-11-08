// const greet = function() {
//     console.log("Hello");
// };

// function welcome(callback) {
//     callback();
// }

// welcome(greet);


// function myFunction() {
//   let carName = "Volvo";
//   console.log(carName);
// }

// myFunction();

// function sayHello() {
//   return "Hello World";
// }

// let text = sayHello;
// console.log(text());

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);