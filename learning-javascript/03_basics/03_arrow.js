const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this keyword current context(Values) ko refer karta hai
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 
    // browser k andar jo global object hai vo window object hai

// function chai(){
//     let username = "ashish"
//     console.log(this.username);   
// }
 
// chai()

// const chai = function (){
//     let username = "ashish"
//     console.log(this.username);
// }

const chai = () => {
    let username = "ashish"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {    // Basic arrow function
//         return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2   // implicit return 
// const addTwo = (num1, num2) => (num1 + num2)   // implicit return curly{} braces main return likhna padta hai but parenthesis main return nhi likhna padta hai
const addTwo = (num1, num2) => ({username: "ashish"})  


console.log(addTwo(3,4));






