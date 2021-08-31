function init(){

  const muteButton = document.getElementById('mute')

  // const introMusic = document.getElementsByClassName('.intro-beat')
  const audio = new Audio('assets/sounds/Perturbator - Complete Domination (feat. Carpenter Brut).mp3')
  // let isPlaying = false; 


  function togglePlay(event) {
    if (audio.paused) {
      event.target.classList.remove('fa-volume-mute')
      event.target.classList.add('fa-volume-up')
      audio.play()
    } else {
      event.target.classList.remove('fa-volume-up')
      event.target.classList.add('fa-volume-mute')
      audio.pause()
    }
  }

  muteButton.addEventListener('click', togglePlay)
  // function playAudio(event){
  //   event.target.classList.remove('fa-volume-mute')
  //   event.target.classList.add('fa-volume-up')
  //   audio.play()
  //   event.target.addEventListener('click', stopAudio)
    
  // }

  // function stopAudio(event){

  //   event.target.classList.remove('fa-volume-up')
  //   event.target.classList.add('fa-volume-mute')
    
  //   audio.pause()
  //   event.target.addEventListener('click', playAudio)
    
  // }

  // muteButton.addEventListener('click', playAudio)
  
  
}
document.addEventListener('DOMContentLoaded', init)
//