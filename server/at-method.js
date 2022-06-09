const professors = ['Oscar', 'Nico', 'Fredddy', 'Christian', 'Angela'];

console.log(professors.at(1));
console.log(professors.at(-1));
console.log(professors.at(10));
console.log(professors.at(3.8));
console.log(professors.at(-3.3));
//Usar valores como -1 o decimales solo con el método at

// console.log('Con corchetes', professors[3.8]);
console.log(professors.at(-5.3));
/*
.at() es un nuevo método el cual nos permite acceder a elementos de arreglos o a caracters de cadenas.
Así, estamos accediendo a la posición de un array o sting.
So.
1 // Nico
-1 // Es una forma elegante de imprimir el útlimo caracter de nuestro array.
10// undefined ya que no tiene un valor en esa posición.
3.87 // Toma el valor entero así que imprime al que se encuentre en la tercera posición Christian
-3.3 // Freddy, interesante, ya que como -1, es el último valor, empezamos a contar de derecha a izquierda
y tenemos al valor de Freddy.






*/