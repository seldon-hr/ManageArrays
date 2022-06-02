const numbers = [1, 2, [3, 4], 5, 6, [7, 8], 9, 0];
console.log(numbers.flat());

/*
.flat es un array method que crea un nuevo arreglo con los elementos concanetados
recursivamente hasta una profundidad especificada.
    Dicho en otras palabras, permite 'aplanar' un arreglo anidado un número determinado
de veces. Es una bueana alternativa a usar por ejemplo reduce para hacer lo mismo
y no muchos devs conocen que existe esta característica en el lenguaje.

*/