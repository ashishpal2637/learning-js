// Promises


// 1st Promise
const promiseOne = new Promise( (resolve, reject)=>{
    // Do an async task
    // DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
} )

promiseOne.then(function(){
    console.log("Promise consumed");
})

// 2nd Promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// 3rd Promise
const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username:"ashish", email: "chai@example.com"})
   }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// 4th Promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ashish", password: "1234"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

// 5th Promise
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject('ERROR: js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()
   
// async function getAllUsers(){
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data =await response.json()
//      console.log(data);
//    } catch (error) {
//     console.log("E:", error)
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/ashishpal2637')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
