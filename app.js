let circles = document.querySelectorAll('#circles')
let index = 0
let powerButton = document.querySelector('#powerButton')
let interval = null
let inputTimer = document.getElementById('intervalTimer')
let intervalTime = 0
let submitButton = document.querySelector('#submitButton')

function start(){

    if (powerButton.className == 'off'){
        intervalTime = inputTimer.value
        intervalTime = intervalTime * 1000
        powerButton.className = 'on'
        interval = setInterval(printCircle, intervalTime)
    } else {
        powerButton.className = 'off'
        clearInterval(interval)
    }
}

function printCircle(){
    const circle = circles[index]
    circle.classList.add('active')

    setTimeout(() => {
        circle.classList.remove('active')
    }, 1000)
    
    if (index === circles.length - 1){
        index = 0
    } else {
        index++
    }
}


