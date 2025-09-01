// object literal

const user = {
    username: "Ashish",
    loginCount: 9,
    signedIn: true,

    getUserDetail: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);    // this keyword current context btane k liye use hota hai
        // console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


// const promiseOne = new Promise()  // new keyword naya context bnane main kaam aata hai
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;                // right side ki value variable hai or left side ki value jo pass kar rhe hai vo hai
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this      //return this karne se jo bhi object tha vo pass on kardia 
}

const userOne = new User("ashish", 12, true)
const userTwo = new User("vikas", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

