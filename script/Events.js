import {
  buttonPlay,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  cardFlorest,
  cardRain,
  cardCoffee,
  cardBonfire,
  darkModeLight,
  darkMode,
  bodyStyle,
  timerColor,
  buttonColor,
  volumeControlFlorest,
  volumeControlRain,
  volumeControlCoffee,
  volumeControlBonfire,
  buttonSoundOff,
  buttonSoundOn
} from './config.js'

export function Events({ timer, sounds }) {
  buttonPlay.addEventListener('click', function () {
    timer.countdown()
  })

  buttonStop.addEventListener('click', function () {
    timer.reset()
  })

  buttonTimeUp.addEventListener('click', function () {
    timer.timeUp()
  })

  buttonTimeDown.addEventListener('click', function () {
    timer.timeDown()
  })

  cardRain.addEventListener('click', function () {
    cardRain.classList.add('rain-active')
    cardBonfire.classList.remove('bonfire-active')
    cardCoffee.classList.remove('coffee-active')
    cardFlorest.classList.remove('florest-active')
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.playRain()
  })

  cardBonfire.addEventListener('click', function () {
    cardBonfire.classList.add('bonfire-active')
    cardRain.classList.remove('rain-active')
    cardCoffee.classList.remove('coffee-active')
    cardFlorest.classList.remove('florest-active')
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.playBonfire()
  })
  cardCoffee.addEventListener('click', function () {
    cardCoffee.classList.add('coffee-active')
    cardBonfire.classList.remove('bonfire-active')
    cardRain.classList.remove('rain-active')
    cardFlorest.classList.remove('florest-active')
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.playCoffee()
  })
  cardFlorest.addEventListener('click', function () {
    cardFlorest.classList.add('florest-active')
    cardCoffee.classList.remove('coffee-active')
    cardBonfire.classList.remove('bonfire-active')
    cardRain.classList.remove('rain-active')
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')

    sounds.playFlorest()
  })

  darkModeLight.addEventListener('click', function () {
    darkModeLight.classList.add('dark-mode-hide')
    darkMode.classList.remove('dark-mode-hide')
    darkMode.classList.add('dark-mode-active')
    bodyStyle.classList.add('dark-mode')
    timerColor.classList.add('dark-mode')
    buttonColor.classList.add('dark-mode')
  })

  darkMode.addEventListener('click', function () {
    darkMode.classList.add('dark-mode-hide')
    darkMode.classList.remove('dark-mode-active')
    darkModeLight.classList.add('dark-mode-active')
    darkModeLight.classList.remove('dark-mode-hide')
    bodyStyle.classList.remove('dark-mode')
    timerColor.classList.remove('dark-mode')
    buttonColor.classList.remove('dark-mode')
  })
  volumeControlFlorest.addEventListener('change', function () {
    sounds.florest.volume = volumeControlFlorest.value / 100
  })
  volumeControlRain.addEventListener('change', function () {
    sounds.rain.volume = volumeControlRain.value / 100
  })
  volumeControlCoffee.addEventListener('change', function () {
    sounds.coffee.volume = volumeControlCoffee.value / 100
  })
  volumeControlBonfire.addEventListener('change', function () {
    sounds.bonfire.volume = volumeControlBonfire.value / 100
  })

  buttonSoundOff.addEventListener('click', function () {
    sounds.SoundOff()
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    cardFlorest.classList.add('florest-active')
    cardCoffee.classList.remove('coffee-active')
    cardBonfire.classList.remove('bonfire-active')
    cardRain.classList.remove('rain-active')

    sounds.playFlorest()
  })
}
