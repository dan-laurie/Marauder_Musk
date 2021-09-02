function init(){

  const muteButton = document.getElementById('mute')
  const audio = new Audio('assets/sounds/Perturbator - Complete Domination (feat. Carpenter Brut).mp3')

  function togglePlay(event) {
    if (audio.paused) {
      event.target.classList.remove('fa-volume-mute')
      event.target.classList.add('fa-volume-up')
      audio.volume = 0.1
      audio.play()
    } else {
      event.target.classList.remove('fa-volume-up')
      event.target.classList.add('fa-volume-mute')
      audio.pause()
    }
  }

  muteButton.addEventListener('click', togglePlay)
}
document.addEventListener('DOMContentLoaded', init)
