export function Sounds() {
  const florest = new Audio('./sounds/Floresta.wav')
  florest.loop = true

  const rain = new Audio('./sounds/Chuva.wav')
  rain.loop = true

  const coffee = new Audio('./sounds/Cafeteria.wav')
  coffee.loop = true

  const bonfire = new Audio('./sounds/Lareira.wav')
  bonfire.loop = true

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  kitchenTimer.volume = 0.2

  function endTime() {
    kitchenTimer.play()
    bonfire.pause()
    rain.pause()
    coffee.pause()
    florest.pause()
  }

  function playRain() {
    bonfire.pause()
    rain.play()
    coffee.pause()
    florest.pause()
  }
  function playFlorest() {
    florest.play()
    bonfire.pause()
    rain.pause()
    coffee.pause()
  }
  function playCoffee() {
    coffee.play()
    bonfire.pause()
    rain.pause()
    florest.pause()
  }
  function playBonfire() {
    bonfire.play()
    rain.pause()
    coffee.pause()
    florest.pause()
  }

  function SoundOff() {
    bonfire.pause()
    rain.pause()
    coffee.pause()
    florest.pause()
  }

  return {
    playFlorest,
    playRain,
    playCoffee,
    playBonfire,
    endTime,
    florest,
    rain,
    coffee,
    bonfire,
    SoundOff
  }
}
