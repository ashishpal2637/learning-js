const boxs = document.querySelectorAll('.box')
const body = document.querySelector("body")

boxs.forEach( (box) => {
    // console.log(box);
    box.addEventListener('click', () => {
        body.style.backgroundColor = `${box.id}`
    })
    
})


