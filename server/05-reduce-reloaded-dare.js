const items = [1, 3, 2, 3, 3, 1, 10, 7, 8, 9, 2, 5, 7];


// const rta = items.reduce((obj, item) => {
//     if (!obj[item]) {  //¿no tienes el valor uno?
//         obj[item] = 1; //inciarlo con el valor 1
//     } else {
//         obj[item] = obj[item] + 1; //Tines el valor tal, si ya lo tengo, entonces sumale 1.
//     }
//     return obj;
// }, {})
// console.log(rta)
// // Ya que queremos tener un objeto como retorno, en la iniciación, lo hacemos como
// // un objeto vació

const rta1 = items.reduce((obj, item) => {
  if(item > 0 && item < 6) {
      obj['1-5']++;
  }
  if(item > 5 && item < 9){
      obj['6-8']++;
  }
  else if (item > 8){
    obj['9-10']++;
  }
  return obj
},{
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
})

console.log(rta1);




/*
Output
{
    1-5: 1,
    6-8: 2,
    9-10: 1
}
*/
