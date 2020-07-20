import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -1.99);
validate(newProd).then(errors => {
  if(errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  }
})

console.log(newProd.getInformation());

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());

// const loadedProducts = products.map(
//   prod => new Product(prod.title, prod.price)
// );
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
