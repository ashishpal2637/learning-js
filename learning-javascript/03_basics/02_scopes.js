// var c = 300
let a = 300   // Global scope example
if (true) {         //Block scope example
    let a = 10;
    const b = 20;
    console.log("INNER:", a);
    
}
console.log(a);
// console.log(b);
// console.log(c);

// browser k through check karne par global scope alag hai
// or vs code main node k through check karne par global scope alag hai