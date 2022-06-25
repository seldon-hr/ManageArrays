// ¿Cuál es resultado de person.name?

const person = { name: 'nico', age: 28 };
const newPerson = person;
newPerson.name = 'santi';
console.log(person.name);
