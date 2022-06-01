const array = [
    {
        name: 'Product 1',
        price: 1000,
        stock: 10
    },
    {
        name: 'Product 2',
        price: 2000,
        stock: 20
    },
    {
        name: 'Product ',
        price: 3000,
        stock: 30
    },
];
function solution(array) {
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }))


// const newArray = array.map(item => {
//     return {
//         ...item,
//         taxes: Math.trunc(item.price*.19)
//     };
    
// })

// console.log('original', array);
// console.log('new', newArray);
// console.log('original', array);
}

solution();



// 

