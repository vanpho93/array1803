const person = {
    name: 'teo',
    school: {
        name: 'a',
        x: 'b',
        y: 2
    }
};

// const name = person.school.name;
// const x = person.school.x;
// const y = person.school.y;
const { name, x, y } = person.school;

console.log(name);
console.log(x);
console.log(y);

const a = 5;
const b = 15;
const point = { a, b };

console.log(point);
