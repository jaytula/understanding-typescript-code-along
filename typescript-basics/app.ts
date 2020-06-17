// const person: { name: string; age: number } = {
const person: {
  name: string,
  age: number;
  hobbies: string[],
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin'); // exception... allowed
// person.role[1] = 10;  // ERR
// person.role []; // ERR
// person.role = [0, 'admin', 'user']; // ERR

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map); // !!! ERROR !!!
}