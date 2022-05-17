



// Add event handler for clicking buttons 

// // * Store the numeric value of each unique button and push it two a array

// let div = document.querySelectorAll(".box");

let cont = document.querySelector(".container");

let winningP = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

// let currentPlayer = x;

let humanArr = [];

// Game Scores

let compScore = [];

// Arrays 

let width = 3;

let cellCount = width * width;

// Function that creates grid of divs

function createGrid(){

    for (let index = 0; index < cellCount; index++) {

        const div = document.createElement("div");
        
        div.setAttribute('id', index)

        div.classList.add("box")
    
        cont.appendChild(div)
        
        // cells.push(div);

        div.innerText = index;

    }

}

createGrid();

// JQuery that finds index of each .box when clicked and then returns it
// let flipCoin = Math.floor(Math.random() * 2)
// let computerUser = 1;
// let humanUser = 0;

// Tracks round wins
let playerScore = [];
let computerScore = [];

// Tracks turns
let playerGo = 0;
let computerGo = 0;

// The computers move options, each time the user selects a box the computerOptions removes the number the user has selected
let computerOptions = [0,1,2,3,4,5,6,7,8];

// While player score is < 3 carry on 
// If player score is equal to 3 they win the round 

$(".box").click(function(){

    // This gets the boxes index and pushes/adds it to an empty array
    let code = $(this).attr('id');
    
    // Push user input to an Array
    humanArr.push(code);

    // Sort that array in ascending order
    humanArr.sort(function(a, b){return a-b});

    // This colors the text of the selected box
    $(this).css({color: 'red'});

    $(this).text("X");


    function removeText(){
        $(".box").remove("X");
        
    }





    //  let xElement = document.createElement("img");
    //  xElement.setAttribute("src", "https://via.placeholder.com/150");
    //  document.getElementById("code").appendChild(xElement);

    // let userSelection = document.getElementById(code);
    // console.log(userSelection)

    console.log(`You have clicked on ${$(this).attr('id')}`)
    console.log(computerOptions)

    // This loop removes the Users choice from the computerOptions array 
    // This loop checks the computerOptions variable and splices the the number of 
    // the index of the box that the player most recently clicked on
    
    for (let index = 0; index < computerOptions.length; index++) {
        
        if(computerOptions[index] == code){
            
            computerOptions.splice(index, 1);
            console.log(computerOptions)

        }
    }

    computerGo = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    // This loop removes the Computers choice (computerGo) from the computerOptions array 
    // This loop checks the computerOptions variable and splices the the number of the 
    // index of the box that the computerGo variable selected
    

    for (let index = 0; index < computerOptions.length; index++) {
        
        if(computerOptions[index] == computerGo){
            
            computerOptions.splice(index, 1);
            console.log(computerOptions)

        }
    }
    


    console.log("The Computer picks " + computerGo + "!")

    let x = $(`#${computerGo}`).text("O");

    console.log(x)

    console.log("computerOptions", computerOptions)



    // If neither of us score a winning position we need to default end game as a tie 

    // A tie will take place when all 9 boxes have been filled 

    // if ()
   

    // Conditional For finding a winning match 
    if(humanArr.equals([0,1,2]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();
    
    } else if(humanArr.equals([3,4,5]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([6,7,8]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([0,3,6]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([1,4,7]) == true){
       
        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([2,5,8]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([0,4,8]) == true){

        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else if(humanArr.equals([2,4,6]) == true){
        
        playerScore++;
        console.log(playerScore);
        console.log(`${humanArr} is a winning position`);
        return resetGame();

    } else {

        console.log("false")
    
    };
    
});


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







// Reset Game Function 

function resetGame(){

    // https://bit.ly/3NixlSR

    humanArr.forEach(element => {

        while(humanArr.length > 0) {

            humanArr.pop(element)
            console.log(humanArr)
            

        }
        

    });

    

}







// PLanning on using neon text 