



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


let playerScore = [];

// While player score is < 3 carry on 
// If player score is equal to 3 they win the round 

$(".box").click(function(){

    // This gets the boxes index and pushes/adds it to an empty array
    let code = $(this).attr('id');

    console.log(code)

    // Push user input to an Array
    humanArr.push(code);

    // Sort that array in ascending order
    humanArr.sort(function(a, b){return a-b});


    // This colors the text of the selected box
    $(this).css("color", "red");

    

    

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




