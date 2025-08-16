// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num); 
}

const greetings = "Hello!"
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

// console.log(map);

// maps unique value k liye jane jate hai ki value unique hogi or jis order main di h usi order main hogi 

for (const [key, value] of map){
  console.log(key, ':-', value);
}

const myobject = {
  game1: 'NFS',
  game2: 'spiderman'
}

// for (const [key, value] of myobject) {
//   console.log(key, ':-', value);
  
// }



