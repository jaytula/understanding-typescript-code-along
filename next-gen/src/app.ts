const userName = "Max";
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;

//   result = a + b;
//   return result;
// }

// var has function and global scope
// let also has block scope
// if (age > 0) {
//   var isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) [button.addEventListener("click", event => console.log(event))];
printOutput(add(3, 8));
