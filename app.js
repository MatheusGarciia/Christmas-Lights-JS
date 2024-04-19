let circles = document.querySelectorAll('#circles')
let index = 0

function printCircle(){
    const circle = circles[index]

    console.log(circle)
    circle.classList.add('active')

    setTimeout(() => {
        circle.classList.remove('active')
    }, 1750)
    
    if (index === circles.length - 1){
        index = 0
    } else {
        index++
    }
}

setInterval(printCircle, 2000)

