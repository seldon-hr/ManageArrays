const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 60) {
        rta = element;
        break;
    }
}

console.log('for', rta);

const rta2 = numbers.find(item => item === 60)
console.log('find', rta2);