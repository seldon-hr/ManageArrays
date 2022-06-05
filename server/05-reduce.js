const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
}
console.log(sum);


const rta = totals.reduce((sum, item) => sum + item, 0)
/*Dentro de reduce es necesario usar primero el acumulador, por eso va sum, antes
item, y después función flecha, e iniciarlo en 0 el acumulador.

*/
console.log(rta)