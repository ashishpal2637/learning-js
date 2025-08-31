let correctnum = parseInt(Math.random()*100+1)
console.log(correctnum);
let form = document.querySelector('form')
let usernum;
let previousGuess;
let preg = document.querySelector('.previousGuesss')
let count = 10;
 let guessremain=document.querySelector('.guessremain')


 form.addEventListener('submit',function(e){
    e.preventDefault()
    usernum= document.querySelector('.usernum');
    previousGuess = usernum.value;
    preg.textContent = `${usernum.value}`
    count--
    guessremain.innerHTML=`${count}`
    
     if(usernum.value==correctnum){
        let instruction= document.querySelector('.instruction')
         instruction.innerHTML= `${"you win"}`
    }else if(usernum.value < correctnum){
        let instruction= document.querySelector('.instruction')
         instruction.innerHTML= `${"please enter above number "}`
        // console.log("r");

    }else if(usernum.value > correctnum){
        let instruction= document.querySelector('.instruction')
        instruction.innerHTML= `${"please enter below num "}`
        // console.log("");
        
    }

    if(count == 0) {
        document.querySelector('.submit-btn').disabled = true;
        
    }

    usernum.value = ''  
 })
