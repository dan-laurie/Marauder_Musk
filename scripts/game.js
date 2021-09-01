function init() {
  const muteButton = document.getElementById('mute')

  // const introMusic = document.getElementsByClassName('.intro-beat')
  const audio = new Audio('assets/sounds/Perturbator - Complete Domination (feat. Carpenter Brut).mp3')
  // let isPlaying = false;

  // toggles game music for both pages. The only way to get around the autoplay law it seems.
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
  const startButton = document.querySelector('.start-game')
  const resetButton = document.querySelector('.reset-game')

  const postGame = document.querySelector('.post-game')
  const introText = document.querySelector('.intro')

  //game starts here when called
  function gameStart() {
    introText.style.display = 'none'

    function gameReset() {
      location.reload()
      postGame.style.display = 'none'
    }

    function turnOffButton() {

      startButton.setAttribute('disabled', '')


    }



    // Elements
    const grid = document.querySelector('.grid')

    // Variables
    const width = 13
    const height = 15 // Define the width of the grid
    const cellCount = height * width// Define total cell count
    const cells = [] // Define empty array that will contain all the grid cells once created
    const livesDisplay = document.querySelector('.lives')
    const scoreDisplay = document.querySelector('.score')
    const finalScore = document.querySelector('.final-score')
    const resultText = document.querySelector('.result')
    const verdict = document.querySelector('.verdict')
    const aliensDestroyed = []
    const aliens = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    
    const alienClassName = 'alien'//define the css class of the aliens
    const muskClassName = 'musk' // Define the css class for the character
    // const missileClassName = 'missile'
    const startingPosition = 188 // Cell position for the start of the game
    
    let currentPosition = startingPosition // Current position which is updated on every move
    let indexShift = 1
    // const missileStart = currentPosition -= width
    let lives = 3
    let score = 0
    let moveRight = true
    // const aliens = [,]
    scoreDisplay.innerText = 0
    livesDisplay.innerText = 3
    // Executions

    // Create our grid
    function createGrid(startPos) {
      for (let i = 0; i < cellCount; i++) { // Loop for the length of cellCount
        const cell = document.createElement('div') // Create a div
        //cell.innerText = i // Add index as innerText
        grid.appendChild(cell) // Append cell to grid
        cells.push(cell)
      }
      addMusk(startPos) //add musk in on game start
      addAliens(startPos)//add aliens to divs on game start
    }

    //add aliens
    function addAliens() {
      for (let i = 0; i < aliens.length; i++) {
        if (!aliensDestroyed.includes(i)) //this stops re-writing the aliens once killed //?ALIENSDESTROYED is the array of the
          cells[aliens[i]].classList.add(alienClassName)
      }
    }

    //remove aliens

    function removeAliens() {
      for (let i = 0; i < aliens.length; i++) {
        cells[aliens[i]].classList.remove(alienClassName)
      }
    }

    // Add Musk
    function addMusk(cellPosition) {
      // console.log('Cell position for addCat ->', cellPosition)
      // console.log('Cell at cellPosition ->', cells[cellPosition])
      cells[cellPosition].classList.add(muskClassName) // Find cell in cells array using passed in position, and add class
    }
    // Remove Musk
    function removeMusk(position) {
      cells[position].classList.remove(muskClassName)
    }

    // Musk movement, only left and right needed
    function handleKeyDown(event) {

      // Remove existing musk
      removeMusk(currentPosition)

      const key = event.keyCode // event.keyCode is the unique code for the key that was pressed
      const right = 39
      const left = 37
      

      if (key === right && currentPosition % width !== width - 1) {
        currentPosition++
      } else if (key === left && currentPosition % width !== 0) {
        currentPosition--
      } else {
        console.log('INVALID KEY')
      }
      // Add musk at new current position
      addMusk(currentPosition) // Musk added at updated currentPosition or old currentPosition if no conditions were met
    }


    // Events
    document.addEventListener('keydown', handleKeyDown) // Listening for key press

    //? MAKING ALIENS MOVE ACROSS THE PLAYZONE!!!!!
    //GOAL: we want the aliens to move down the page. But when hitting a side they +width and move across
    function mobiliseAliens() {
      //defining play boundaries for the aliens
      const leftSide = aliens[0] % width === 0 // getting the furthest to left side alien
      const rightSide = aliens[aliens.length - 1] % width === width - 1 // getting furthest to right side alien

      removeAliens() // getting rid of them from current positions

      //if the fleet collides with right side of playzone
      if (rightSide && moveRight) {
        for (let i = 0; i < aliens.length; i++) {
          aliens[i] += width + 1
          indexShift = -1
          moveRight = false // setting falsey to break out and meeet criteria of next if and so on and so on.....
        }
      }
      //if the fleet collides with left side of playzone
      if (leftSide && !moveRight) {
        for (let i = 0; i < aliens.length; i++) {
          aliens[i] += width - 1
          indexShift = 1
          moveRight = true
        }
      }


      // now moving aliens to the next-door square or next index respecitvely
      for (let i = 0; i < aliens.length; i++) {
        aliens[i] += indexShift
      }


      addAliens()
      // setInterval(mobiliseAliens, 2000)

      //? IF ALIENS REACH ELON, GAME OVER, F in the chat etc......
      // function gameOver(){
        
      // }
      // if (cells[currentPosition].classList.contains(alienClassName, muskClassName)) {
      //   grid.style.display = 'none'
      //   postGame.style.display = 'block'
      //   finalScore.innerText = `Your final score is: ${score}`
      //   clearInterval(alienAdvance)
      //   clearInterval(bombTick)
      //   window.confirm('GAME OVER, YOU FAILED TO PROTECT THE COLONY')
      // } 
      // if (gameOver()){
      //   gameReset()
      // }

    }
    const alienAdvance = setInterval(mobiliseAliens, 1000)
    
    
    //this function block controls the missile being fired. I guess i'll use a similar one for the aliens dropping bombs.
    function deployMissile(event){
      let missileTimer = null
      let currentMissilePosition = currentPosition
      function fireMissile() {

        const alienAudio = new Audio('assets/sounds/Microsoft Windows XP Error - Sound Effect (HD).mp3')
        cells[currentMissilePosition].classList.remove('missile')
        currentMissilePosition -= width
        if (cells[currentMissilePosition]){
          
          cells[currentMissilePosition].classList.add('missile')

          if (cells[currentMissilePosition].classList.contains(alienClassName)){
            alienAudio.play()
            cells[currentMissilePosition].classList.remove('missile')
            cells[currentMissilePosition].classList.remove('alien')
            cells[currentMissilePosition].classList.add('bang')
            alienAudio.play()
          
            setTimeout(() => cells[currentMissilePosition].classList.remove('bang'), 300)
            clearInterval(missileTimer)

            const alienKilled = aliens.indexOf(currentMissilePosition)
            aliensDestroyed.push(alienKilled)
            score += 100
            scoreDisplay.innerText = score
          } 
          
        } else {
          clearInterval(missileTimer)
        }
      }
      if (event.keyCode === 32){
        // const audio = new Audio('assets/sounds/RPG FX.wav')
        // audio.play()
        missileTimer = setInterval(fireMissile, 100)
      } 
    }
    document.addEventListener('keyup', deployMissile)


    //? ALIENS DROPPING BOMBS at RANDOM INTERVALS

    function bombDrop(){
      //so first we need to allocate a random alien index position and define that as where the bomb will originate from
      let bombPosition = aliens[(Math.floor(Math.random() * aliens.length))]
      console.log(bombPosition) //logging to show random index in console.
      //now we need to define its movement
      const audio = new Audio('assets/sounds/Laser Gun Sound Effect.mp3')
      audio.play()
      const bombTick = setInterval(() => {
        
        cells[bombPosition].classList.remove('bomb')
        bombPosition += width //using + this time as travelling down page

        if (cells[bombPosition]){
          cells[bombPosition].classList.add('bomb')
          console.log(cells[bombPosition])
  
          // logic to workout outcome if the bomb hits Elon
          const elonHit = new Audio('assets/sounds/Minecraft Damage (Oof) - Sound Effect (HD).mp3')
          if (cells[bombPosition].classList.contains('musk')) {
            elonHit.play()
            cells[bombPosition].classList.remove('bomb')
            cells[bombPosition].classList.add('bang')
            clearInterval(bombTick)
            score -= 200
            scoreDisplay.innerText = score
            lives -= 1
            livesDisplay.innerText = lives
          }
          const missionFailed = new Audio("assets/sounds/Mission Failed we'll get em next time Sound Effect.mp3")
          //END GAME SCENARIO 1 (LOSS BY DEATH)
          if (lives === 0){
            missionFailed.play()
            grid.style.display = 'none'
            postGame.style.display = 'block'
            resultText.innerText = 'GAME OVER'
            verdict.innerText = 'The Andromedans destroyed your chariot. You failed to defend Nüwa'
            finalScore.innerText = `Your final score is: ${score}`
            clearInterval(alienAdvance)
            clearInterval(bombTick)
            clearInterval(bombFreq)
          }
          //END GAME SCENARIO 2 (LOSS BY INVASION)
          if (cells[currentPosition].classList.contains(alienClassName, muskClassName)) {
            missionFailed.play()
            grid.style.display = 'none'
            postGame.style.display = 'block'
            resultText.innerText = 'GAME OVER'
            verdict.innerText = 'The Andromedans have invaded Nüwa'
            finalScore.innerText = `Your final score is: ${score}`
            clearInterval(alienAdvance)
            clearInterval(bombTick)
            clearInterval(bombFreq)
            // window.confirm('GAME OVER, YOU FAILED TO PROTECT THE COLONY')
          } 
          // END GAME SCENARIO 3 (VICTORY BY SUCCESSFUL DEFENSE)
          const victoryFanfare = new Audio('assets/sounds/Chinese Film Administration Screen.mp3')
          if (aliensDestroyed.length === aliens.length) {
            victoryFanfare.play()
            grid.style.display = 'none'
            postGame.style.display = 'block'
            resultText.innerText = 'VICTORY!'
            verdict.innerText = 'You have succesfully defended Nüwa'
            finalScore.innerText = `Your final score is: ${score}`
            clearInterval(alienAdvance)
            clearInterval(bombTick)
            clearInterval(bombFreq)
            // window.confirm('GAME OVER, YOU FAILED TO PROTECT THE COLONY')
          } 
  
          setTimeout(() => cells[bombPosition].classList.remove('bang'), 300)

        } else {
          clearInterval(bombTick)
        }
      }, 400)
      
    }
      

    //now setting an interval so the above code block can be executed at a random delay between 500-3000ms
    const bombFreq = setInterval(bombDrop, 4000)
    function bombTimer() {
      const randomTime = Math.round(Math.random() * (3000 - 500)) + 500
      bombFreq
      console.log(randomTime)
    }
    
    bombTimer()

    // at this point we have a fully working game wohoooo!!!
    // Now we will create some end game scenarios
    //? END GAME SCENARIOS
    // const div = document.querySelectorAll('div')
    // const gridWrapper = document.querySelector('.grid-wrapper')

    // if (lives === 0){
    //   //clear grid
    //   grid.style.display = 'none'
    //   //dislay message that says you lost
    //   console.log('dead')
    //   // say reset game to start again
    // }    

    // if (aliens === []){
    //   //clear grid
    //   //dislay message that says you won
    //   // say reset game to start again
    // }    









    createGrid(startingPosition)
    turnOffButton()
    resetButton.addEventListener('click', gameReset)
  }

  startButton.addEventListener('click', gameStart)
  
}
document.addEventListener('DOMContentLoaded', init)