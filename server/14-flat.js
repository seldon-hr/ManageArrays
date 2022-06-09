const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9]
]

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

const rta = matriz.flat(3);

console.log('for', newArray);
console.log('flat', rta)


///Ejercicio de recursividad común.
function aplanaMatriz(matriz) {
    let array = [];
    for (element of matriz) {
        if(Array.isArray(element)){
            array = array.concat(aplanaMatriz(element));
        }else {
            array.push(element);
        }
    }
    return array;
}

console.log(aplanaMatriz(matriz))