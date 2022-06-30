const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonTimeUp = document.querySelector('#time-up')
const buttonTimeDown = document.querySelector('#time-down')
const textMinutes = document.querySelector('#minutes')
const textSeconds = document.querySelector('#seconds')
const cardFlorest = document.querySelector('#forest')
const cardRain = document.querySelector('#rain')
const cardCoffee = document.querySelector('#coffee')
const cardBonfire = document.querySelector('#bonfire')
const darkModeLight = document.querySelector('#sun')
const darkMode = document.querySelector('#moon')
const bodyStyle = document.body
const timerColor = document.querySelector(
  'body > main > div.timer-controls > div.timer'
)
const buttonColor = document.querySelector(
  'body > main > div.timer-controls > div.controls-only'
)
const cardsColor = document.querySelector('body > main > div.cards')
const volumeControlFlorest = document.querySelector('.volumeControl-florest')
const volumeControlRain = document.querySelector('.volumeControl-rain')
const volumeControlCoffee = document.querySelector('.volumeControl-coffee')
const volumeControlBonfire = document.querySelector('.volumeControl-bonfire')

export {
  buttonPlay,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  textMinutes,
  textSeconds,
  cardFlorest,
  cardRain,
  cardCoffee,
  cardBonfire,
  darkModeLight,
  darkMode,
  bodyStyle,
  timerColor,
  buttonColor,
  cardsColor,
  volumeControlFlorest,
  volumeControlRain,
  volumeControlCoffee,
  volumeControlBonfire
}
