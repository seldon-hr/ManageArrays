const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]




const letters = ['a', 'b', 'c'];

//Transformación con un for.

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

const newArray = letters.map(item => item + '++');

console.log('orginal', letters);
console.log('new', newArray)