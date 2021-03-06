const products = [
    { title: 'Pizza', price: 121, id: 'ð' },
    { title: 'Burger', price: 121, id: 'ð' },
    { title: 'Hot cakes', price: 121, id: 'ð¥' },
];

const myProducts = [];


// Eliminar y aÃ±adir un nuevo elemento
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));
// const producIndex =  products.findIndex(item => item.id === 'ð');
// if (producIndex !== -1) {
//     myProducts.push(products[producIndex]);
//     products.splice(producIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

//not affect the first array or orginal array.
const mineProducts =  products.filter(product => product.id === 'ð')
console.log("products", products);
console.log("mineProducts", mineProducts);
console.log("-".repeat(10));

//Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: 'ð' },
    { title: 'Burger', price: 121, id: 'ð' },
    { title: 'Hot cakes', price: 121, id: 'ð¥' },
];

const update = {
    id: 'ð¥' ,
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const producIndex =  productsV2.findIndex(item => item.id === update.id);
productsV2[producIndex] = {
    ...productsV2[producIndex],
    ...update.changes,
};
console.log(productsV2);