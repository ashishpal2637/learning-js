// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));  

// includes() method dtermine if an array includes a certain value among its entries, returning true or false as appropriate
 
// console.log(myArr.indexOf(3));  

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)    //slice does not change the original array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)    // splice changes the original array
console.log(myn2);
console.log("C", myArr);





