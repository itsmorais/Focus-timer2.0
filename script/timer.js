export function Timer({ textMinutes, textSeconds, endTime }) {
  let minutes = Number(25)
  let seconds = Number(0)
  let timerDone

  function countdown() {
    timerDone = setTimeout(function () {
      if (seconds == 0 && minutes == 0) {
        endTime()
        reset(timerDone)
        // Ring Bell sound not working for mobile devices, using alert instead
        if (window.screen.width < 600) {
          alert('Focus-Timer Over\n Well Done!')
        }
        return
      } else if (seconds == 0) {
        seconds = 2
        minutes--
      }

      seconds--

      textMinutes.textContent = String(minutes).padStart(2, '0')
      textSeconds.textContent = String(seconds).padStart(2, '0')

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
    timeDown,
    timerDone
  }
}
