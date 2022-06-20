import {
  buttonPlay,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  textMinutes,
  textSeconds,
  cardFlorest,
  cardRain,
  cardCoffee,
  cardBonfire
} from './config.js'

export function Events({ timer, sounds }) {
  buttonPlay.addEventListener('click', function () {
    console.log('play')
    timer.countdown()
  })

  buttonStop.addEventListener('click', function () {
    console.log('STOP')
    timer.reset()
  })

  buttonTimeUp.addEventListener('click', function () {
    console.log('Time UP')
    timer.timeUp()
  })

  buttonTimeDown.addEventListener('click', function () {
    console.log('Time down')
    timer.timeDown()
  })

  cardRain.addEventListener('click', function () {
    cardRain.classList.add('rain-active')
    cardBonfire.classList.remove('bonfire-active')
    cardCoffee.classList.remove('coffee-active')
    cardFlorest.classList.remove('florest-active')
    sounds.playRain()
  })

  cardBonfire.addEventListener('click', function () {
    cardBonfire.classList.add('bonfire-active')
    cardRain.classList.remove('rain-active')
    cardCoffee.classList.remove('coffee-active')
    cardFlorest.classList.remove('florest-active')
    sounds.playBonfire()
  })
  cardCoffee.addEventListener('click', function () {
    cardCoffee.classList.add('coffee-active')
    cardBonfire.classList.remove('bonfire-active')
    cardRain.classList.remove('rain-active')
    cardFlorest.classList.remove('florest-active')
    sounds.playCoffee()
  })
  cardFlorest.addEventListener('click', function () {
    cardFlorest.classList.add('florest-active')
    cardCoffee.classList.remove('coffee-active')
    cardBonfire.classList.remove('bonfire-active')
    cardRain.classList.remove('rain-active')
    sounds.playFlorest()
  })
}
