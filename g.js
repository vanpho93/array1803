const arr = [1, 3, 5, 2, 4, 6, 7, 10];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 15, height: 90 },
    { name: 'Tun', age: 12, height: 110 },
    { name: 'Tuan', age: 14, height: 115 },
];

// console.log(arr.sort((a, b) => a - b));
// console.log(people.sort((a, b) => a.age - b.age));

console.log(arr.reduce((a, b) => a + b));
console.log(people.map(person => person.age).reduce((a, b) => a + b));
console.log(people.reduce((a, b) => ({ age: a.age + b.age })).age);
