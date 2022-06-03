//A
const multiplicar = (a) => (b) => a * b;
//B
const test = (nombre, accion) => {
  return accion(nombre);
};
console.log(test('Ana', console.log)); //Ana (por consola)

/*
Respuesta Correcta: C) Ambas
Por definición una Higher Order Function es:

1. Una función que regresa otra función. 2. Una función que puede tener funciones en sus parámetros.

multiplicar aunque no lo parezca regresa otra función, podría escribirse también de la siguiente manera:

  function multiplicar(a){
 return function(b){
 return a * b;
 }
 }  


Acá se observa mejor que multiplicar regresa una función anónima que realiza la operación del producto, es mucho más sencillo usar retornos implícitos para poder escribir lo mismo en una sola línea como en el ejemplo original.

test recibe 2 parámetros, uno de ellos es una función que en el ejemplo es console.log de javascript nativo, esto es motivo suficiente para que sea considera una Higher Order Function.
*/
