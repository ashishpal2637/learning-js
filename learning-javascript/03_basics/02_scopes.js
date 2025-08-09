// var c = 300
let a = 300   // Global scope example
if (true) {         //Block scope example
    let a = 10;     // Block scope: The scope created with a pair of curly braces (a block).
    const b = 20;
    // console.log("INNER:", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

// browser k through check karne par global scope alag hai
// or vs code main node k through check karne par global scope alag hai

function one(){          
    const username = "Ashish"
 
    function two(){             
        const website = "Youtube"
        console.log(username);
        
    }

   // console.log(website);

    two()
    
}
// one()

if (true) {
    const username = "Ashish"
    if(username === "Ashish"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ********************** interesting ***************


console.log(addone(5));   // yeh execute hojayega kyuki isme variable declare nahi kia hai

function addone(num){
    return num + 1
}


addTwo(5)                           // Yeh Error dega kyuki isme function declare kar k usko variable main hold kar dia hai      
//ise hositing bolte hai isme dekhte hai ki function kaise declare karte hai kaise variable ko javascript treat karti hai kaise ek final tree bnati hai jha par sare function rakhe jate hai variable rakhe jate hai yhi ek hoisting hota hai jha par executing context banta hai ki declaration phle aap use nahi kar sakte hai
const addTwo = function(num) {   
    return num + 2
}


