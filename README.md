# Project 1 - Space Invaders

## Project Overview

For the first project of the SEI, the task was to make a fully functioning game from a list of ten classic arcade games. This was to be a browser game utilising HTML, CSS and JavaScript and had to be completed within a week.

For my first major project as a software engineer in training, I chose to put my own twist on the 80s arcade classic, Space Invaders. 

Named "Marauder_Musk", this game is set in 2066, after Elon Musk's successful colonisation of Mars and the founding of the presently fictional city of Nüwa. 

Using the base rules of the original game, the objective is simple. Defend Nüwa by clearing the Andromedan armada or face a successful invasion, resulting in a game loss. 


## Controls

Once on the landing page, click **Enter the Game** to be taken to the game page. After the player has read the animated story, they may proceed to clicking **Start Game**. The player may only move **left** and **right**, whilst the alien fleet are able to meander down the page, firing lasers towards the player in the process. To engage the missiles, the player can press **spacebar**

## Brief Visual Demonstration

(GIF HERE)

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
