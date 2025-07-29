// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456459334539n // last main n lgane se ye bigint ban gya




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "spiderman", "thor"];
// []  arrays

let myObj = {
    name: "ashish",
    age: 22,
}
// {} curly braces k andar jo bhi likha h vo objects h

const myFunction = function(){
    console.log("Hello Ashish");
    
}
// function (){} ese karte h function define

console.log(typeof scoreValue);

// typeof operator se hum datatype pta karne k liye use karte h



//****************************

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "ashishpal"

let anothername = myYoutubename
anothername = "ashu"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Stack k andar jo bhi value rakhte hain uska hume copy hi milta hai

// Heap m jo bhi value rakhte hume uska reference milta hai

//Actually main aap jo bhi changes karte hain vo original value main hi karte hai