### Immutable

`[`🐵`,`🐶`,`🐺`,`🐱`]` 

Dentro de este array, tenemos unos valores ya definidos, ahora, a agregar un extra que sustituya al gato, 🐱, queremos que esto sea *mutable* o que generé una copia. 
Verbigracia. 

[🐵,🐶,🐺,🐱] → [🐵,🐶,🐺,🐷] 

La idea es que remplazar al 🐱 por el 🐷, pero al realizarlo tenemos que preguntarnos si esto va a tener un efecto colateral. De manera que, al mutar, este array, queremos esta cadena de efectos colaterales o sí lo que queremos es generar una copia, un nuevo estado y tener una nueva modificación.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e8f2e84-91b5-46f0-853c-7ae21674f864/Untitled.png)

 When estamos cambiando el array original estamos haciendo una mutación. Instead, cuando estamos generando un nuevo estado (clonando) y agregando nuestros cambios, obtenemos una estructura de datos **inmutable.**

Ver el array as a tree, cada uno de los elementos tiene una ‘copia’; una referencia en memoria. Actually, cuando haces una copia de un array y solo han cambiado ciertos elementos, esta nueva estructura copia las referencias en memoria; no los elementos, a excepción de aquellos que hayan cambiado.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8386188-c77e-4bbf-9917-39ac429fb04c/Untitled.png)

### ¿Por que mutable o inmutables?

Dentro de JS, tenemos dos tipos de datos

- Primitive type (undefined, Boolean, number, string, symbol)
- Reference type (Objects, arrays, functions).

*Una diferencia dentro de estos es como se almacenan los datos en memoria, es decir mientras unos hacen nuevos espacios, los otros referencian.

```jsx
let name = 'Dan'>;
let name2 = name;

let person = {name: 'Dan'};
let person2 = person;
```

![**Mutable:** Es algo que se puede cambiar o agregar.
**Inmutable:** No se puede cambiar ni agregar.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/656301de-ceeb-41ff-903b-8ba313de4edb/Untitled.png)

**Mutable:** Es algo que se puede cambiar o agregar.
**Inmutable:** No se puede cambiar ni agregar.

Los valores primitivos en JS, son valores que se reasignan, todos estos valores son **inmutables.**

```jsx
console.log(name); //Dan
console.log(name2); //Dan

name2 = 'Ozymandias';

console.log(name); //Dane
console.log(name2): //Ozymandias
```

```jsx
console.log(person); //{name: 'Dan'}
console.log(person2); //{name: 'Dan'}

person2.name = 'Ozymandias';

console.log(person); //{name: 'Ozymandias'}
console.log(person2); //{name: 'Ozymandias'} 
```

Por ello, en ES6, se creo el operador que nos permite hacer referencia al mismo objeto, haciendo copias sin hacer referencia al objeto.
