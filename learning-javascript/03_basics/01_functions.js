function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
       
}

//sayMyName(); // function call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2
    
}

const result = addTwoNumbers(4, 6)
// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return  `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"));
console.log(loginUserMessage("Ashish"));

