const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 60) {
        rta = element;
        break;
    }
}

console.log('for', rta);

const rta2 = numbers.find(item => item === 60)
console.log('find', rta2);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: 'π'
    },
    {
      name: "Burger",
      price: 23,
      id: 'π'
    },
    {
      name: "Hot dog",
      price: 34,
      id: 'π­'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: 'π₯'
    },
  ];
  

  const rta3 = products.find(item => item.id === 'π')
  console.log('find', rta3);
//findIndex devuelve el valor de posiciΓ³n a diferencia de find, que devuelve el dato (objeto, parte del array)
  const rta4 = products.findIndex(item => item.id === 'π')
  console.log('findIndex', rta4);