// variables: -

// Variables are containers that hold data.
// They help us store, reuse, and update information in JavaScript — from simple values like
// numbers to complex data like arrays and objects.

// Javascript mein 3 tarike hai jinse hum variable declare kar sakte hai -- var, let, const.

// declaration and initialization

// var a;  declare
// var a = 12; declare + initialize

// ---- Var
// old and risky avoid in modern javascript 
// var is functional scoped
// var ko redeclare aur reasigned kar sakte hai
// Hoisted to the top with undefined value

// var a = 12;
// var a = 13;

// ---- let
// used in modern javascript
// let is block scoped 
// let ko redeclare nahi kar sakte lekin reasigned kar sakte hai
// Hoisted, but stays in the Temporal Dead Zone (TDZ)

// let a = 12;
// let a = 13;

// ---- const
// used in modern javascript
// const is block scoped
// const ko na hi redeclare kar sakte hai aur na hi reasigned kar skate hai
// TDZ applies here too

// const a = 12;
// a = 13;  -- error

// But: if const holds object/array, you can still change its value.


// ---- Scope (global, functional, block)

// # global scope:- variables declare outside the function or block. Accessible from anywhere.
// keywords -- var, let, const
// var a = 123;


// # function scope:- variables declare inside a function. only accessible inside that function.
// keywords -- var, let, const
// function abcd(){
//     var a = 12;
//     console.log(a)
// }

// abcd();

// # block scope:- variables declare inside {} (e.g., if statements or loops).
// keywords -- only let and const
// {
//     let a = 12;
//     console.log(a);
// }


/* TDZ  (Temporal Dead Zone) -- The Temporal Dead Zone (TDZ) is a behavior in JavaScript
 where variables declared with let and const exist but cannot be accessed before 
 their declaration is reached during execution. Attempting to do so throws
  a ReferenceError.*/

// console.log(a);

// let a = 10;

/* Scope starts
     │
     ▼
┌──────────────────────────────┐
│ Temporal Dead Zone (TDZ)     │
│ x exists but cannot be used  │
└──────────────────────────────┘
     │
let x = 10;
     │
     ▼
x is initialized and can be accessed */


/* ----- Hoisting :--> hoisting javascript ka vo behavior hai jisme declaration part ko execution se pehle memory mein register kar diya jata hai 

javascript ka engine internally kuch ese kaam karta hai jab hum ek variable banate hai to vo
variable ko doo hisse mein tod deta hai declare part jo ki upar chala jata hai or uska
initialization part niche reh jata hai */

// var --> hoist hota hai or iski value undefined set hoti hai
// let --> hoist hota hai par iski koi value set nahi hoti reference error aata hai
// const --> ye bhi hoist hota hai par iski koi value set nahi hoti reference error aata hai

// let a = 10;

// function demo() {
//     console.log(a);

//     if (true) {
//         let a = 20;
//     }
// }

// demo();

