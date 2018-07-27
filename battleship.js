var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc; 
var location2 = location1 + 1; 
var location3 = location2 + 1;
var guess;
var hits = 0; 
var guesses = 0;
var isSunk = false;

while (isSunk==false) {
    guess = prompt("Номер от 1-го до 6-ти. Угадаешь? ");
    if (guess < 0 || guess > 6) {
        alert("Ну ты чего? От 1-го до 6-ти же");
        } else {
        guesses = guesses + 1; }
    if (guess == location1 || guess == location2 || guess == location3) {
         hits = hits + 1;}
    if (hits == 3) { isSunk = true;
        alert("Блин. Ты выиграл"); 
    }
}
var stats = "Ты использовал " + guesses + " попыток потопить корабль " +
"твоя статистика " + (3/guesses);
alert(stats);
