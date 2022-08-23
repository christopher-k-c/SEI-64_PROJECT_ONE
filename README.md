# Tic Tac Toe

<a href="https://christopher-k-c.github.io/SEI-64_PROJECT_ONE/">Deployed Site</a>

![Completed](/final.png)

This project was my first deep dive into javascript, it took four days and was a solo endeavour. JQuery and Javascript were used to build the game logic, Sweet Alert which is a javascript messaging library was used to notify Users of the games outcomes and HTML and CSS to shape and style the project. Here is a brief overview of the game's constraints, the User can only play the computer, a game is won when a player applies one of the eight winning positions to the grid, a round is won when either the User or Computer wins three games, the game score is then reset when a User or the Computer wins.

## List Of Technologies Used:

* HTML
* CCC
* JavaScript
* JQuery
* Sweet Alert


## Wireframes and Userstories 

![Figma](/figma.png)

<a href="https://www.figma.com/file/pk7l77rXgNJoFsfVeHWQnc/Untitled?node-id=0%3A1"> Figma </a>


* As a player, I want my input i.e. clicking on a box, to affect the grid system by populating it with a X symbol.

* As a player, each time I make a choice, I need the game to check my input against a list of winning inputs.

* As a player, when I have taken my go, I need the computer to make its move.

* As a player, each time the computer makes a choice, I need the game to check its input against a list of winning inputs.

* As a player, each time I score, the game needs to add my score to my name.

* As a player, if my score exceeds three wins, then i have won the round.

* As a player, each time we draw, I need a way of the game logging this to my window.


## Planning and Development
Essentially, at the beginning I was looking for the bare bone components of a tic tac toe game, what’s the minimum required to build a tic tac toe game, once I had achieved building the basic outline of the game I would then attempt to add additional functionality.

I started by researching tic-tac-toe, I found that they all require a player, computer and draw score. A grid, two players and a way to reset/start the game. 

Furthermore, there are only eight winning positions a player can select, so I needed to find a way of tracking the Users selections and then comparing those selections against all winning positions. I decided to store all positions, from winning positions to the computers and users current selections, inside arrays and then use a series of functions to check the combinations, looking for matches and updating the game's score based on those matches.


## Unsolved Problems

* Be able to pick between X & O.

* Be able to flip a coin on who goes first.

* I think the computer could be more intelligent in the way that it selects a position on the grid, at the moment it is totally random.

* I would like to re-write all code which does not adhere to the DRY principle.

* Make the website responsive.


## Solving For The Winner

There are eight winning positions on the board. Each time a user takes a go the index of the selected box is stored in an array. The computer has two arrays, one of which is called the Computer options array, this contains all of the positions the computer can choose from and the other is called the computer array which stores the computer's inputs. Each time the human makes a choice their selected number is removed from the computer options array.

![Checking For User Winning Position](/game_logic.png)

Each input from both computer and user is checked against the winning positions array, if the user for instance has a match, we add 1 to the playerScore variable, a dialog box pops up informing the user of their win and two functions are run, checkScore() and resetGame().

The checkScore() function looks to see if the player or computer's score is equal to three - if so they win the game - if not they play on. The resetGame function will refresh the boxes, removing all X and O’s. It will also replenish the computer options array with a full list of options and remove everything from the Human Array and Computer Array which contains their previous game input.

Once the user or computer has won three times the game is over. The last function we call clears everything including the player, computer and draw score.

## Sweet Alert Promise Example

![Sweet Alert Promises](/sweetalert-two.png)

This promise allowed me to set the users name by pulling up a user input field styled by the sweet alert library, which targets a html element with the id of USER1 and when the User inputs their name the HTML element has its inner html set to the value of the user input.

![Sweet Alert Promises](/sweetalert.png)

Here is an example of the sweet alert in action, it's not only used for setting a users name but also for alerting the Player to the outcome of a game or round.


## CSS Keyframes Animation Example
![CSS Keyframes Animation Example](/keyframe.png)

I implemented a CSS keyframe animation into my project, this was my first time using animations. I wanted to add a little visual depth to the game and I thought the neon styling (Which i had seen done in various tutorials) would suit the project. I followed a tutorial and then experimented with its implementation.



## CSS Variables Example
![CSS Variables Example](/css-vars.png)

I wanted to write clear and easily amendable code which is why I decided to implement CSS variables into the project.



## Favourite Functions

My favourite function is probably the click function because it ignites the game, setting off a series of loops and methods.

## Key Learnings & Wins

- Discovered the every() method which is an integral part of the game's logic and a key discovery that ensured the project's success.
- Discovered the includes() method which again played a key role in comparing grid combinations against winning positions.
- Learnt Javascript promises via Sweet Alert library.
- Managed to check for winning combinations and updated the game score based on the outcomes of the functions that checked for draws or matches.
- The User is able to change their playing name from Guest to their name or anything that they like.


## Bugs and Future Fixes

- Not responsive, Grid becomes impossible to use at smaller screen sizes.
- Increase the intelligence of the computer dramatically.
- All for two human players.
- Would like to keep track of all top scores, a score board.





