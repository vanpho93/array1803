const arr = [1, 3, 5, 2, 4, 6, 7];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 15, height: 90 },
    { name: 'Tun', age: 12, height: 110 },
    { name: 'Tuan', age: 14, height: 115 },
];

Array.prototype.myEvery = function(fn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if(!fn(element)) return false;
    }
    return true;
}

console.log(arr.myEvery(x => x < 7));
// console.log(arr.some(x => x > 7));
