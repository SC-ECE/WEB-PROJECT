//Declare variables
let numberOfPennies = 23;
let info = document.getElementById("info");
let feedback = document.getElementById("feedback");
let pieces = document.getElementById("pieces");

//Define functions
function displayPennies() {
  pieces.innerHTML = "";
  for (let i = 0; i < numberOfPennies; i++) {
    let penny = "<div class='penny'></div>";
    pieces.innerHTML += penny;
  }
}

function take(number) {
  if (number > numberOfPennies) {
    feedback.innerHTML = "There aren't enough pennies.";
    return;
  }
  if (number === numberOfPennies) {
    feedback.innerHTML = "You took the last penny. You lose.";
    numberOfPennies -= number;
    displayPennies();
    return;
  }
  numberOfPennies -= number;
  feedback.innerHTML = "You took " + number;
  if (number === 1) {
    feedback.innerHTML += " penny. ";
  }
  else {
    feedback.innerHTML += " pennies. ";
  }

  displayPennies();
  computerTurn();
}

function computerTurn() {
  let number;
  while (true) {
    number = Math.floor(Math.random() * 3) + 1;
    if (number <= numberOfPennies) {
      break;
    }
  }

  if (number === numberOfPennies) {
    feedback.innerHTML += "The computer took the last penny. You win!";
    numberOfPennies -= number;
    displayPennies();
    return;
  }

  numberOfPennies -= number;
  feedback.innerHTML += "The computer took " + number;
  if (number === 1) {
    feedback.innerHTML += " penny. ";
  }
  else {
    feedback.innerHTML += " pennies. ";
  }

  displayPennies();
}

//Introduce the player to the game
let introduction = "<h3>23 Pennies</h3>";
introduction += "Take turns removing 1, 2, or 3 pennies. ";
introduction += "Whoever takes the last penny loses. ";
info.innerHTML = introduction;

displayPennies();