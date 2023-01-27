console.log('!')

const button = document.querySelectorAll('.buttons')
// const message = document.querySelector('.message')
const message = document.querySelector('.message')


//use ternary to change the button back to grey if isGrey = 'true' || 'false'
let isGrey = false
//loop over 5 button and change the background of the clicked button to grey
button.forEach((b, i) => {
    b.addEventListener('click', (e) => {
        isGrey = !isGrey
        e.target.style.backgroundColor = isGrey ? 'hsl(216, 12%, 54%)' : 'rgb(124, 135, 152, 0.2)'
    //use e.target, otherwise the background of the entire div containing buttons will change
    const rating = e.target.textContent
    const result = `You selected ${rating} out of 5`   
    console.log(result)
    console.log(e)
    
    
    message.innerHTML = result
    
})
})



