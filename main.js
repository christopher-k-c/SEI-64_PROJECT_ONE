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


// Tracks the computers choice
let computerGo = 0;


// The computers move options, each time the user selects a box the computerOptions removes the number the user has selected
let computerOptions = [0,1,2,3,4,5,6,7,8];


// Stores the human and computers go whilst the game is underway  
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
        
        // div.innerText = index;

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
    // $(this).css({color: 'black'});

    // Adds the X from the user input into the div currently selected 
    $(this).text("X");
    $(this).addClass("X");

    // $(this).css('background-color', 'red');

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

    // Check Computer game Score
    checkComputerGameScore();

    // console.log(computerOptions, "hello")

    checkDraw();

    // stopUserFromSelectingO();

    var elts = document.getElementsByClassName('box');


    for (var i = 0; i < elts.length; i++) {

        let check = elts[i].innerHTML;
        

        if(check === "O"){

            console.log(check)

            elts[i].classList.add("O");
        
        }
    }

    

    
  
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

    // Adds that choice to the computerArr array, the double quotations separate each int pushed to the array
    computerArr.push("" + computerGo);

    // Sorts that array in ascending order 
    computerArr.sort(function(a, b){return a-b});

    // Add Class O to all computer choices   
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


  
    // User Score

    var containsAll = false;
    var terminated = false;

    winningP.forEach(winC => {
        
            containsAll = winC.every(element => {
            var humanResult = humanArr.includes(element);
            
            return humanResult;
            
        }); 

        console.log(containsAll)

        if(containsAll == true){
            terminated = true;
            console.log(`The user has won!`)

            swal("Player won this round")

            playerScore++
            checkScore();
            resetGame();

            
        } else {

            

            // $(this).addClass("X");
            // console.log("Winning combo not matched")
        }
    });
    console.log(terminated)

}


function checkComputerGameScore(){

    

    var compContainsAll = false;
    var compTerminated = false;
    

    winningP.forEach(winC => {
    console.log(computerArr)
    console.log(winningP) 
        compContainsAll = winC.every(element => {
        var computerResult = computerArr.includes(element);

        return computerResult;
        
    }); 

    console.log(compContainsAll)

    if(compContainsAll == true){
        compTerminated = true;
        
        swal("Computer won this round")

        computerScore++
        checkScore();
        resetGame();
        
    } else {
        // console.log("Winning combo not matched")
    }
    });
    console.log(compTerminated)

}


function checkScore(){



    if(playerScore >= 3){

        playerScore = 0;
        
        console.log("Player Wins the game")

        // Sweet Alert telling user they have one
        swal("Player Wins the game!");
        // Reset Game Scores
        document.getElementById("P1").innerHTML = "";
        document.getElementById("P2").innerHTML = "";

    } else if (computerScore >= 3) {

        computerScore = 0;

        // Sweet Alert telling user they have one
        swal("Computer Wins the game!");
        
    } else {
        
        $("div").removeClass("O");
        document.getElementById("P1").innerHTML = `${computerScore}`;
        document.getElementById("P2").innerHTML = `${playerScore}`;
        console.log("Play on!")
    }

}


function checkDraw(){

    if (computerOptions.length <= 0) {
        console.log("It's a draw!")
        swal("It is a draw!");
        draw++
        document.getElementById("draw").innerHTML = `${draw}`;
        updateGame();
    }

}


// Reset Game Function 
function resetGame(){


    draw = 0;
    
    // Resets the players name
    document.getElementById("USER1").innerHTML = `Player One:`;

    updateGame();

    
}


function updateGame(){

    $("div").removeClass("X");
    $("div").removeClass("O");

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

    // Clear all boxe styling  
    const clearBoxes = document.querySelectorAll('.box');

    clearBoxes.forEach(box => {
      box.style.backgroundColor = 'transparent';
      
      
    });

    // Resets computerOption array to the full list of indexes 
    computerOptions = [0,1,2,3,4,5,6,7,8];

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

}


function setName() {


    swal({
        content: "input",
    })
    .then(value => {
        document.getElementById("USER1").innerHTML = `${value}:`;
        let userName = value
        console.log(userName);
    
        
    });


    



}









