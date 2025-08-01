// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 27)
// let myCreatedDate = new Date(2025, 0, 23, 10, 9)
let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:
    "long"
})

