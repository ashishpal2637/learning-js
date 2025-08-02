// singleton 
// object.create

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Ashish",
    "full name": "Ashish Pal",
    [mysym]: "mykey1",
    age: 21,
    location: "Rohtak",
    email: "ashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(jsUser.email);  // accessing property using dot notation
// console.log(jsUser["email"]);  // accessing property using square bracket notation
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);
// console.log(typeof mysym);

jsUser.email = "ashu@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ankit@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js user");   
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`); // using this keyword to access the object property
    
}

console.log(jsUser.greeting()); // calling the method 
console.log(jsUser.greetingTwo());  //

// jab bhi values ko access karenge toh dot se hi access karenge jadatar







