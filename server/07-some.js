const numbers = [1, 1, 3, 7];

//Si uno de estos cumple con un for
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break; //Al encontrar uno, cortamos el ciclo.
    }
}

console.log(rta);