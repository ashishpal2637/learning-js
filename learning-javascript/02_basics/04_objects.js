// const tinderUser = new Object();  // yeh ek singleton object hai

const tinderUser = {}  // yeh ek non-singleton (literal) object hai
tinderUser.name = "jon"
tinderUser.id = "123abs"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Ashish",
            lastname: "Pal"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);    // Optional chaining operator (?.) is used to safely access deeply nested properties without throwing an error if any part of the chain is undefined or null.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)  // object.assign() is used to merge multiple objects into one new object
const obj3 = {...obj1, ...obj2, ...obj4} // spread operator is used to merge multiple objects jadatar hum yhi use karege 
//console.log(obj3);

const users = [
    {
        id: 1,
        name: "sam",
        email: "sam@gmail.com"
    },
     {
        id: 1,
        name: "sam",
        email: "sam@gmail.com"
    },
     {
        id: 1,
        name: "sam",
        email: "sam@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  




