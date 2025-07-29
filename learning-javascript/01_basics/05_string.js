const name = "Ashish"
const age = 22

// console.log(name + age + " value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("ankit hc com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "   vikas   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashish.com/2004pal"

console.log(url.replace('2004','2005'));

console.log(url.includes('ashish'));

console.log(gameName.split('-'));



