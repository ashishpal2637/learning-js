/* --- Data type

A datatype defines the kind of value stored in a variable

let age = 22;
yha javascript ko pata hai ki is variable k pass number value hai

How Many Data Types Are There in JavaScript?

javascript has 2 categories of data types
1. Primitive data type
2. Non Primitive (Reference) data type

Primitive values immutable hoti hai
esi value jinhe copy karne par tumhe unki ek real copy mil jayegi
javascript mein 7 primitive data types hai
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Symbol
7.BigInt

ab sabko samjhte hai 

1. number: - the number data type represent numeric values
it includes 
-integer:- 10, 20, 30
-decimal:- 3.14, 2.177
-negative numbers:- -50, -60

for example:-

let age = 21;
let pi = 3.14;
let temprature = -5;

console.log(age);
console.log(pi);
console.log(temprature);

Special Number Values

JavaScript also provides some special numeric values
Infinity-
console.log(10/0);

output:- Infinite

-Infinity
console.log(-10/0);
output:- -infinite

NaN stands for Not a Number
console.log("hello" * 5);
output:- NaN
Because string cannot be multiplied by a number

2. String
A string represent the textual data
3 ways to create string
-Single qoutes ''
-Double qoutes ""
-Backticks ``

single qoutes---
let name = 'Ashish';

double qoutes---
let name = "Ankit";

backticks---
let name = `Vikas`;

String concatenation
let firstname = "Ashish";
let lastname = "Baghel";

console.log(firstname+ " " + lastname);

output:- Ashish Baghel

Template Literals

let name = "Ashish";
let age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);

output:- My name is Ashish and I am 21 years old.

3. Boolean---

A boolean can have only true and false value
for example:

let isLoggedIn = true;
let isAdmin = false;

console.log(true);
output:- true

4. Undefined--
A variable is undefined when it is declared but no value is assigned.

let x;
console.log(x);

output:- undefined

The variable exists in memory, but it has no value.

5. Null-- null represents the intentional empty value
 It means programmer khud value ko empty karta hai.

 const user = null;
 console.log(user);

 output:- null

 Difference between undefined and null

  undefined
  ↓

  JavaScript assigned no value.

  null
  ↓

  The developer intentionally assigned an empty value.


6. Symbol-- A symbol creates a unique value
let id1 = symbol("id");
let id2 = symbol("id");

console.log(id1 === id2);
output:- false

Every Symbol is unique.

Symbols are mainly used as unique object property keys.

7.BigInt--
BigInt is used to store very large integers that exceed the safe range of Number.

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
output:- 123456789012345678901234567890n

Notice the n at the end—it tells JavaScript this is a BigInt.

## Non-Primitive (Reference) Data Types
Reference types store a reference (memory address) instead of the actual value.
it means ki in sab mein value reference k through store hoti hai

main types-- object, array, function, date, map, set

in sab ka base type object hi hota hai

--object
it stores real world entity
let person = {
 name: "Ashish",
 age: 21,
 city: "gurgaon";
}

console.log(person.name);
output- Ashish

--Array
store multiple value in a single variable

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

output- ["apple", "banana", "mango"]

function-- function bhi ek object hota hai

function greet(){
console.log("hello!");
}
greet();

Example: Primitive Copy

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
a change nahi hua 

Example: Reference Copy

let obj1 = {
  name: "Ashish"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul
dono same object ko point kar rahe hai

Dynamic typing--
Js mein static typing nahi hai yha par dynamic typing hai jiska matlab hai
 ki hum data ko change kar sakte hai kyuki yha par dynamic data type hai

 let a = 12;
 a = "ashish";
 a = true;
 a = null;
 a = [];

//type quirks (e.g., null === 'object').

// type coercion (== vs ===)
