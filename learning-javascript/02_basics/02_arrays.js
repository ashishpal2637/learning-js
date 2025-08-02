const marvel_heroes = ["ironman", "hulk", "thor"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// marvel_heroes.concat(dc_heroes)   // concatenates arrays but does not change the original array
// console.log(marvel_heroes);   // output: [ 'ironman', 'hulk', 'thor', [ 'superman', 'batman', 'flash' ] ]

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  // using spread operator to concatenate arrays
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 7]]]

 const real_another_array = another_array.flat(Infinity) // flat method nested array ko single level array mein convert karta hai
 console.log(real_another_array);
 
 console.log(Array.isArray("Ashish"));
 console.log(Array.from("Ashish"));
 console.log(Array.from({name: "Ashish"})); // interesting 

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3)); //creates an array from the arguments passed to it 

 
 
 
 