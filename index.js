// Toss and game setup
var sum = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var tossDone = localStorage.getItem('tossDone') === 'true'; // Check if toss was already done
var tossWinner;

// Function to handle the toss
function doToss() {
    var userChoice = prompt("Toss: Choose Odd or Even").toLowerCase(); // User chooses "odd" or "even"
    
    // Generate random numbers for toss (player and computer)
    var tossPlayer = Math.floor(Math.random() * 6) + 1;
    var tossComputer = Math.floor(Math.random() * 6) + 1;
    
    // Calculate the toss sum and check if it's odd or even
    var tossSum = tossPlayer + tossComputer;
    var tossResult = (tossSum % 2 === 0) ? "even" : "odd";
    
    // Display toss result and determine who won
    if (userChoice === tossResult) {
        alert("You won the toss! Let's start the game.");
        tossWinner = "player";
    } else {
        alert("You lost the toss. The computer will bat first.");
        tossWinner = "computer";
    }
    
    // Mark toss as done and save it to localStorage
    localStorage.setItem('tossDone', 'true');
}

// Check if the toss is needed
if (!tossDone) {
    doToss();
}

// Main game function
function playGame() {
    var randomnum1 = Math.floor(Math.random() * 6) + 1;
    var randomsrc = "images/imgi" + randomnum1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomsrc);

    var randomnum2 = Math.floor(Math.random() * 6) + 1;
    var randomsrc2 = "images/imgi" + randomnum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomsrc2);

    // Check if batsman is out
    if (randomnum1 === randomnum2) {
        document.querySelector("h2").innerHTML = "You are Out!!...REMATCH: " + sum;
        localStorage.setItem('score', 0);
        localStorage.setItem('tossDone', 'false');
        document.getElementById('restartBtn').style.display = 'block';  // Show restart button
    } else {
        sum += randomnum1;
        localStorage.setItem('score', sum);
        
        // Update the score based on hit
        if (randomnum1 === 6) {
            document.querySelector("h2").innerHTML = "You hit a Six!! Score: " + sum;
        } else if (randomnum1 === 4) {
            document.querySelector("h2").innerHTML = "You hit a Boundary!! Score: " + sum;
        } else {
            document.querySelector("h2").innerHTML = "Score: " + sum;
        }
    }
}

// Function to restart the game
function restartGame() {
    localStorage.setItem('score', 0);
    localStorage.setItem('tossDone', 'false');
    location.reload(); // Reload the page to reset the game
}
