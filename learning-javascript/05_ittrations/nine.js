// reduce method 

const myNums = [1, 2, 3]

// const myToatal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)

// const myToatal = myNums.reduce( (acc, currval) => acc + currval, 0)


// console.log(myToatal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "c++ course",
        price: 979
    },
    {
        itemName: "Data science course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay);
