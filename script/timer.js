export function Timer({ textMinutes, textSeconds }) {
  let minutes = Number(25)
  let seconds = Number(0)
  let timerDone
  let stopTimer

  function countdown() {
    timerDone = setTimeout(function anything() {
      if (seconds == 0 && minutes == 0) {
        stopTimer()
      } else if (seconds == 0) {
        seconds = 60
        minutes--
      }

      seconds--

      textMinutes.textContent = String(minutes).padStart(2, '0')
      textSeconds.textContent = String(seconds).padStart(2, '0')
      stopTimer = clearTimeout(timerDone)

      countdown()
    }, 1000)
  }

  function reset(timer) {
    clearTimeout(timerDone || timer)
  }

  function timeUp() {
    minutes = minutes + 5
    textMinutes.textContent = String(minutes).padStart(2, '0')
  }
  function timeDown() {
    if (minutes >= 5) {
      minutes = minutes - 5
      textMinutes.textContent = String(minutes).padStart(2, '0')
    } else {
      alert('Os Minutos estão abaixo de 5, acrescente antes de decrementar')
    }
  }

  return {
    countdown,
    reset,
    timeUp,
    timeDown
  }
}
