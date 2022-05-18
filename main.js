// The main container where the divs are created
let cont = document.querySelector(".container");

// All winning positions 
let winningP = [

    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]

]

// Tracks round wins
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// No match 

let turn = 0;


// Tracks the computers choice
let computerGo = 0;


// The computers move options, each time the user selects a box the computerOptions removes the number the user has selected
let computerOptions = [0,1,2,3,4,5,6,7,8];


// Stores the human and computers whilst the game is underway  
let humanArr = [];
let computerArr = [];


// Defines array width and height  
let width = 3;
let cellCount = width * width;



// Function that creates grid of divs
function createGrid(){

    for (let index = 0; index < cellCount; index++) {

        const div = document.createElement("div");
        
        div.setAttribute('id', index)

        div.classList.add("box")
    
        cont.appendChild(div)
        
        div.innerText = index;

    }

}
createGrid();




$(".box").click(function(){

    // This gets the boxes index and pushes/adds it to an empty array
    let code = $(this).attr('id');
    
    // Push user input to an Array
    humanArr.push(code);

    // Sort that array in ascending order
    humanArr.sort(function(a, b){return a-b});

    // This colors the text of the selected box
    $(this).css({color: 'red'});

    // Adds the X from the user input into the div currently selected 
    $(this).text("X");

    // Logs the button you have selected 
    console.log(`You have clicked on ${$(this).attr('id')}`)

    // Removes the users choice from the computers options 
    removeUserChoice(code);
    
    // The computer makes it's choice
    addComputerChoice();

    // The computer removes it's previous choice from it's list of options
    removeComputerChoice();
        
    // Checks if theres a winning set of inputs
    checkGameScore();
  
});

function removeUserChoice(id){

    // This loop removes the Users choice from the computerOptions array 
    // This loop checks the computerOptions variable and splices the the number of 
    // the index of the box that the player most recently clicked on
    for (let index = 0; index < computerOptions.length; index++) {
        
        if(computerOptions[index] == id){
            
            computerOptions.splice(index, 1);
            

        }
    }

}

function addComputerChoice(){


   
    // Decides which number the computer can pick 
    computerGo = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    // Adds that choice to the computerArr array
    computerArr.push(computerGo);

    // Sorts that array in ascending order 
    computerArr.sort(function(a, b){return a-b});

    turn++
    
    

}

function removeComputerChoice(){

    // This loop removes the Computers choice (computerGo) from the computerOptions array 
    // This loop checks the computerOptions variable and splices the the number of the 
    // index of the box that the computerGo variable selected
    for (let index = 0; index < computerOptions.length; index++) {
        
        if(computerOptions[index] == computerGo){
            
            computerOptions.splice(index, 1);
            
        }
    }
    
    console.log("The Computer picks " + computerGo + "!")

    $(`#${computerGo}`).text("O");
}

function checkGameScore(){

    // var containsAll = false;
    // var terminated = false;

    // winningP.forEach(winC => {
    //     // console.log(winC)
    //     // console.log(humanArr)
    //         containsAll = winC.every(element => {
    //         var result = humanArr.includes(element);
    //         return result;
        
    //     }); 

    //     console.log(containsAll)

    //     if(containsAll == true){
    //         terminated = true;
    //         // console.log("Winning Combination Matched")
    //     } else {
    //         // console.log("Winning combo not matched")
    //     }
    // });
    // console.log(terminated)

    

    if((humanArr.equals([0,1,2]) == true) || (computerArr.equals([0,1,2]) == true)){


        if(computerArr.equals([0,1,2]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();
        
    }
     else if((humanArr.equals([3,4,5]) == true) || (computerArr.equals([3,4,5]) == true)){



        if(computerArr.equals([3,4,5]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([6,7,8]) == true) || (computerArr.equals([6,7,8]) == true)){

        if(computerArr.equals([6,7,8]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([0,3,6]) == true) || (computerArr.equals([0,3,6]) == true)){

        if(computerArr.equals([0,3,6]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([1,4,7]) == true) || (computerArr.equals([1,4,7]) == true)){
       
        if(computerArr.equals([1,4,7]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([2,5,8]) == true) || (computerArr.equals([2,5,8]) == true)){

        if(computerArr.equals([2,5,8]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([0,4,8]) == true) || (computerArr.equals([0,4,8]) == true)){

        if(computerArr.equals([0,4,8]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else if((humanArr.equals([2,4,6]) == true) || (computerArr.equals([2,4,6]) == true)){
        
        if(computerArr.equals([2,4,6]) == true) {

            computerScore++
            console.log(`The computer wins!`)

        } else {

            playerScore++
            console.log(`The human wins!`)

        }
        checkScore();
        resetGame();

    } else {
        //My clicks are applying one to noMatch, it also needs to be used by the computer
        turn++
        console.log(turn)
    }

    }

    // else if number of turns is equal to 8 log a draw.....
    // else if( turn >= 8 ) { draw++ console.log(" It's a draw")}
    // document.getElementById("draw").innerHTML = `${draw}`





// Compares Arrays

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;

}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});



function checkScore(){

    if(playerScore >= 3){
        playerScore = 0;
        console.log("Player Wins the game")
    } else if (computerScore >= 3) {
        computerScore = 0;
        console.log("Computer Wins the game")
    } else {
        document.getElementById("P1").innerHTML = `${computerScore}`;
        document.getElementById("P2").innerHTML = `${playerScore}`;
        console.log("Play on!")
    }

}



// Reset Game Function 

function resetGame(){
    

    // https://bit.ly/3NixlSR

    humanArr.forEach(element => {

        while(humanArr.length > 0) {

            humanArr.pop(element)
            console.log(humanArr)
            

        }
        

    });

    computerArr.forEach(element => {

        while(computerArr.length > 0) {

            computerArr.pop(element)
            console.log(computerArr)
            

        }
        

    });


    // Removes all elements content - Sorry i know it;s terrible want to refactor

    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";


    // Resets computerOption array to the full list of indexes 
    computerOptions = [0,1,2,3,4,5,6,7,8];

    noMatch = 0;

    




    

}

// const arr1 = ['pizza', 'cola', 'pepsi'];
// const arr2 = ['pizza', 'cake', 'cola'];

// const containsAll = arr1.every(element => {
//   return arr2.includes(element);
// });

// console.log(containsAll);








