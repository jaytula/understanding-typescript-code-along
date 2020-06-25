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

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("button");

// if (button) [button.addEventListener("click", event => console.log(event))];
// printOutput(add(3));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...activeHobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const addThreeNums = (...numbers: [number, number ,number]) => numbers.reduce((acc, curr) => acc + curr, 0);

const addResult = add(5, 10, 2, 3.7);
console.log(addResult);

const addResult2 = addThreeNums(3, 4, 5);
console.log(addResult2);
