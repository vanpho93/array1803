const person = { name: 'Teo', age: 10 };

// const teo = Object.assign({}, person);
const teo = { ...person, height: 100, age: 20 };

person.name = 'Teo Nguyen';

console.log(teo);
console.log(person);

const arr = [1, 3, 5, 6, 10];
const arr2 = [100, ...arr, 100];

console.log(arr2);

const [a, b, c, ...rest] = arr;
console.log({ a, b, c, rest });
