const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

console.log(newArray);

const rta = elements.concat(otherElements);
console.log(rta)

const rta2 = [...elements, ...otherElements];
//Si no es un array, y usamos spread opperator lo speara por caracter
console.log('... spread operator',rta2)

//Lo importante es si uno quiere mutar o no mutar el array original.