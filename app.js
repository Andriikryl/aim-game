const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 11

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})

startGame()

function startGame() {
    setInterval(decreaseTime, 1000)
    createPandomCircle()
    setTime(time)
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10){
            current = `0${current}`
        }
            setTime(current)
        }
    }
    

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {

}

function createPandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}