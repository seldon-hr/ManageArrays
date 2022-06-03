const customers = [
    {
      name: "Friedich",
      lastname: 'Nietzche',
      age: 23,
    },
    {
      name: "Viktor",
      lastname: 'Frankl',
      age: 59,
    },
    {
      name: "Ludwig",
      lastname: 'Wittgenstein',
      age: 68,
    },
    {
      name: "Ozymandias",
      lastname: 'de Beauvoir',
      age: 89,
    },
  ];

// const numbers = [1, 3, 4, 6, 6];

//Con esto hacemos busquedas tanto número como strings.
const search = (query) => {
    return customers.filter(item => {
        return item.name.includes(query) || item.lastname.includes(query)
        || item.age.toString().includes(query);
    })
}


// console.log(numbers.includes(6));
console.log(search('89'));