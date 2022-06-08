const team = [
    {
      name: "Nicolas",
      age: 32,
    },
    {
      name: "Andrea",
      age: 48,
    },
    {
      name: "Zulema",
      age: 21,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const ages = team.map(item => item.age);
console.log(ages);
const rta = ages.every(item => item >= 15);
console.log(rta)