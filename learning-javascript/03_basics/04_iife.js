// Immediately Invoked Function Expression (IIFE)

(function chai(){    // golbal scope k pollution se problem hoti hai kai baar us global scope k variable ya jo bhi declaration k pollution ko htane k liye IIFE ka use karte hai  
    // name IIFE
    console.log(`DB CONNECTED`);
    
})();

(   (name) => {
        console.log(`DB CONNECTED TWO ${name}`);  
        
})('ashish')

