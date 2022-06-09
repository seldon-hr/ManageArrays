const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];


// Eliminar y añadir un nuevo elemento
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));
// const producIndex =  products.findIndex(item => item.id === '🍔');
// if (producIndex !== -1) {
//     myProducts.push(products[producIndex]);
//     products.splice(producIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

//not affect the first array or orginal array.
const mineProducts =  products.filter(product => product.id === '🍔')
console.log("products", products);
console.log("mineProducts", mineProducts);
console.log("-".repeat(10));

//Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞' ,
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