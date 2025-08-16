// const userEmail = "ashish@mail.com"
const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");   
}


// falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing operator (??): null undefined

// null and undefined check karta h agar value ho to value asign karta hai and null hai to null asign karta h or agar undefined ho to undefined asign karta hai

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator 

// condition ? true : false 

const iceTeaPrice  = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;


