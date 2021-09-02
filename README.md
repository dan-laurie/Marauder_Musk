# Project 1 - Space Invaders

## Project Overview

For the first project of the SEI, the task was to make a fully functioning game from a list of ten classic arcade games. This was to be a browser game utilising HTML, CSS and JavaScript and had to be completed within a week.

For my first major project as a software engineer in training, I chose to put my own twist on the 80s arcade classic, Space Invaders. 

Named "Marauder_Musk", this game is set in 2066, after Elon Musk's successful colonisation of Mars and the founding of the presently fictional city of Nüwa. 

Using the base rules of the original game, the objective is simple. Defend Nüwa by clearing the Andromedan armada, be defeated by the armada or face a successful invasion,  the last two resulting in a game loss. 

The game can be viewed/played at: https://dan-laurie.github.io/Project-1/

## Controls

Once on the landing page, click **Enter the Game** to be taken to the game page. After the player has read the animated story, they may proceed to clicking **Start Game**. The player may only move **left** and **right**, whilst the alien fleet are able to meander down the page, firing lasers towards the player in the process. To engage the missiles, the player can press **spacebar**

## Languages/Technologies Used

 - HTML5
 - CSS 3 (with animations)
 - JavaScript ES6+
 - Git
 - GitHub
 - Font Awesome
 - Google Fonts

## Initial Approach to Brief

Once I had decided to build a version of Space Invaders, I started planning out a basic over view of the game using written notes and pseudocode. I began with writing out the basic logic of the game in short statements, whilst also elaborating on which methods I might use in order to accurately achieve this. Below is an example of some of the pseudocode planning.

## Day 1

After the planning phase was complete, I decided to start by creating the basic 'play-zone' for the game. As this is a grid based game, I needed to set a few constants such as `height`, `width` and `cellCount`.  By setting these to variables, it makes changing the size of the grid dynamic and therefore no need to re-write code. 

![the above image shows grid creation through using a ](https://i.imgur.com/biLjEog.png)
The above image shows grid creation via a `for` loop.

## Day 2

The next task was to create a player and add it to an index position on the screen, and being able to remove it when the character moves across the page. During this time I also added the aliens to the grid using a `for` loop that maps them the specific index, which was defined previously.

![enter image description here](https://i.imgur.com/pfVOO07.png)

In addition to this I worked on getting the character movement functional by using event listeners and key-codes. I also added in conditions so the player could only move within the boundaries of the 'play-zone', preventing our protagonist 'Marauder Musk' from escaping the grid.
![enter image description here](https://i.imgur.com/OsIy4ZO.png)
Next I turned my attention to mobilising the Andromedan fleet. To achieve this, the aliens would have to move down the page at a set interval, and would do so until other conditions were met; colliding with the character.
![enter image description here](https://i.imgur.com/NBmDTSL.png)
This code block also features definitions of the play-zone boundaries for the aliens, so they only move within the confines of the grid.

## Day 3

After two days of work, everything was starting to come together smoothly. As there was little functionality at this point, I experienced almost no bugs. The big leap now would be implementing a shooter function that lets the player fire a missile towards the alien fleet, when pressing the spacebar.

In order to achieve this a used a `setInterval`which would determine the speed in which the missile would travel up the page.  The missile would start from the players current position and then travel up the page by using `-= width` which would allow the missile to jump up to the square directly above its current position. 

Within this function I also added in criteria to see if a missile hit an alien. If this was the case, the alien would be removed from the grid and pushed the the `aliensDestroyed` array.  In turn, the score would be updated, rewarding the player 100 points for every elimination.
![enter image description here](https://i.imgur.com/CfwbUGw.png)  
Furthermore, I also added an impact, which would disappear after 0.3s and  sound effects when each alien was hit by the projectile.

I creatively decided against having sound effects for when the player fires a missile, due to the sonic atmosphere becoming polluted, and distorting the other audio samples.

## Day 4
Following on from player missile firing, it was now time for the Andromedans to be able to fight back.  Using a similar method to the missile function, the aliens would be able to fire lasers at a set time, using `setInterval`whilst coming from random positions within the alien fleet using: 

`aliens[(Math.floor(Math.random() * aliens.length))]`

By using the above line of code, this generates a random index from within the alien fleet, which can be set to the lasers starting position.
![enter image description here](https://i.imgur.com/we7Gz2X.png)
I used `+= width`this time in order to let the laser travel down the page . After completing the lasers movement, I decided to invoke some logic that would -200 points and take away 1 life from the player, if hit by the alien laser. 
# Day 5 
By this point the game was really coming together, so I used a full day to find/solve bugs that kept appearing in the Google Chrome dev tools console. These were mainly `classList`errors, occurring because I had not cleared specific intervals. They key here was keeping track of `setInterval`'s by defining them and then using `clearInterval()`when appropriate.

# Day 6
As most of the days so far were incredibly JavaScript orientated, I decided to spend another day on CSS alone, to style my game, making it visually appealing. I gave both the landing page and game page a video as a background, depicting deep-space, to bring the immersive factor of the game on par with the functionality. 

![enter image description here](https://i.imgur.com/jHaaLpK.png)



 
On the landing page, I decided to make the game title pulsate slightly, and let the picture of Marauder Musk shake from side to side. These movements were achieved through the use of CSS Animations. ![enter image description here](https://i.imgur.com/XkmoPJD.png)
![enter image description here](https://i.imgur.com/zR1zFi3.png)
In addition to this, I styled the play-zone in such away that it appears more relevant to the storyline of the game.

![enter image description here](https://i.imgur.com/AFGuzhA.png)
The backdrop to the play-zone now looks like we must defend Nüwa from the Andromedan attack!
# Day 7
As the deadline for the game was fast approaching, I decided to implement all types of end=game scenarios using `if`statements.
![enter image description here](https://i.imgur.com/0x01dxY.png)
These three scenarios were then nested within the `dropBomb`function. At this stage, I had a fully functional and styled game, but I felt there could be more features to take the user experience of the game to another level entirely. 
 # Day 8 (Last Day)
A lot of sound effects were  added to most of the actions that occur in the gameplay, I also added different sounds to the victory screen and both game over screens. 

Another major feature I wanted to implement was an animated story/instruction page that appears when you first enter the game page. The idea was that, using JavaScript, the text could be automatically typed out in real-time, just like an old computer terminal. I also added a morse-code type sound effect for added immersion. 
![enter image description here](https://i.imgur.com/kNGOn86.png)
Using the above code block, I was able to iterate over each letter, word and line, which in turn created the desired effect of a terminal typing.

A favicon was also included for the tabs image for further user pleasure.

![enter image description here](https://i.imgur.com/AQ83aT4.png)

The last feature I wanted on the game, was a way to toggle in game music on or off. 
![enter image description here](https://i.imgur.com/Sk9iyof.png)
The above code shows, using `if else` statements that the audio could be toggled on or off. As I was also using a font awesome icon, this 'toggle' function also switch the icons class showing the speaker muted when the audio was paused and then showing a speaker expelling sound waves when the user had toggled the music on. 

## Styling
As previously mentioned, I styled this game around a fictional invasion of the Martian colony of Nüwa. I quickly found audio clips that I needed and found appropriate fonts that matched the vision I had for the game. The render of Marauder Musk was completed in Photoshop to achieve the slightly comical aspect that I wanted for the game. During the search for audio related material, I found myself having clips that weren't suitable straight away due to long durations or actual timbre. Some of the sound effects that feature in the game, were edited in Logic Pro X to make sure that they fitted seamlessly with the gameplay. 

## Challenges
Over the project time-frame I encountered many obstacles that I had to over come through in depth problem solving and taking the code apart to understand why problems arose. Below were my top three challenges for this project.

 - Finding away to switch between pre-game, game and post-game screens.
 - Animating the mission brief storyline and instructions.
 - Solving collision errors when the player missile collided with an alien.

## Wins
I think actually completing a fully functioning game was no small feat, so I am very pleased my game turned out the way it did. I am especially pleased with the animations used, and the materials used to elevate the players immersive experience.

I think the biggest win of them all though was being able to work through my errors and bugs to make lines of code make sense and function.

## Future Additions

 - Multiple levels, each one with a harder degree of difficultly .
 - A local storage leaderboard that displays previous players highest scores.

## Key Learning Points

 - Comfortability with JavaScript: This project really 'threw me in the deep end' when it came to functionality as JavaScript held the key to all functionality. During the previous teaching weeks I was nervous running up to project week as I thought my coding ability with JavaScript was not strong enough to make the game fully functional. But as the days went by my confidence grew, and I feel that I have surprised myself of what I can achieve when it comes to using JavaScript.
 
 - Debugging: Throughout the creation of this game I had many errors that were causing the game to break and it seemed that one fix lead to another thing breaking. I very much enjoyed putting on my 'code detective' hat to try and find probable causes and solutions to each error that occurred. Through doing this, I have become much more comfortable in using HTML, CSS and JavaScript.

