const arr = [1, 3, 5, 2, 4, 6, 7];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 15, height: 90 },
    { name: 'Tun', age: 12, height: 110 },
    { name: 'Tuan', age: 14, height: 115 },
];
// const arrChan = arr.filter(a => a % 2 === 1);
// console.log(people.filter(person => person.height > 100))

Array.prototype.myFilter = function(fn) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) output.push(element);
    }
    return output;
}
console.log(arr.myFilter(a => a % 2 === 1));
