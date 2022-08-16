# Tic Tac Toe


## List Of Technologies Used:

* Html
* Css
* javascript
* jQuery
* Sweet alert


## Wireframes and Userstories 

https://www.figma.com/file/pk7l77rXgNJoFsfVeHWQnc/Untitled?node-id=0%3A1


* As a player, I want my input i.e. clicking on a box, to affect the grid system by populating it with a X symbol.

* As a player, each time I make a choice, I need the game to check my input against list of winning inputs.

* As a player, when i have taken my go, I need the computer to make its move.

* As a player, each time the computer makes a choice, I need the game to check its input against a list of winning inputs.

* As a player, each time i score, the game needs to add my score to my name.

* As a player, if my score exceeds three wins, then i have won the round 

* As a player, each time we draw, i need a way of the game logging this to my window.


## Planning and Development

Essentially, At the beginning I was looking for the bare bone components of a tic tac
toe game, what’s the minimum required to build a tic tac toe game, once I had achieved 
building the basic outline of the game I would then attempt to add additional 
functionality.

I started by researching tic-tac-toe, I found that they all require a 
player, computer and draw score. A grid, two players and a way to reset/start the 
game.

## Unsolved Problems

* Be able to pick between X & O

* Be able to flip a coin on who goes first 

* I think the computer could be more intelligent in the way that it selects a position on the 
grid, at the moment it is totally random.

* I would like to re-write all code which does not adhere to the DRY principle 

* Make the website responsive 

## Solving For The Winner

There are eight winning positions on the board. Each time a user takes a go the index
of the selected box is stored to an array. The computer has two arrays, one of which
is called the Computer options array, this contains all of the positions the computer
can choose from and the other is called the computer array which stores the computers 
inputs. Each time the human makes a choice their selected number is removed from the 
computer options array. 

![Checking For User Winning Position](/game_logic.png)

Each input from both computer and user is checked against the winning positions array,
if the user for instance has a match, we add 1 to the playerScore variable, a dialog 
box pops up informing the user of their win and two functions are run, checkScore() 
and resetGame().

The checkScore() function looks to see if the player or computers score is equal to 
three - if so they win the game -  if not they play on. The resetGame function will 
refresh the boxes, removing all X and O’s. It will also replenish the computer options
array with a full list of options and remove everything from the Human Array and 
Computer Array which contains their previous game input.

Once the user or computer has won three times the game is over. The last function we 
call clears everything including the player, computer and draw score.

## Favorite Functions

My favourite function is probably the click function because it ignites the game, setting off multiple functions, loop and amendments to arrays.
