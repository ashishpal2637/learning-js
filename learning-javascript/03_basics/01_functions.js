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

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "Alok",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
// handleObject(user)
handleObject({
    username: "vinay",
    price: 299
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));

