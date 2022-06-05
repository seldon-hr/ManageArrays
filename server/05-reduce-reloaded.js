const items = [1, 3, 2, 3, 3, 1, 10];


const rta = items.reduce((obj, item) => {
    if (!obj[item]) {  //¿no tienes el valor uno?
        obj[item] = 1; //inciarlo con el valor 1
    } else {
        obj[item] = obj[item] + 1; //Tines el valor tal, si ya lo tengo, entonces sumale 1.
    }
    return obj;
}, {})
console.log(rta)
// Ya que queremos tener un objeto como retorno, en la iniciación, lo hacemos como
// un objeto vació


/*
Output
{
    1:1,
    3:2,
    2:1
}
*/