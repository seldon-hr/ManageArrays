function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

//What's going to print?
/*
Cuando usamos la sintaxis de '...' en los parámetros de una función (ES6: Rest Operator) convertimos a dicho parámetro a un 
arreglo.

Entoncees es tentador marcar la opción B: 'array' pero este es un error común. En JS no existe el tipo de dato array, para
tipos no primitivos el lenguaje los evalua como object. Por ese motivo la respuesta correcta es que es de tipo 'object'.


*/
